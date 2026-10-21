// Draait de prompt uit prompt.md op T01–T10 uit test-set.md, twee runs.
// Elke run is een aparte `claude -p --model haiku`-aanroep, zonder tools,
// vanuit een nieuwe lege map buiten de repo.
// Gebruik (vanuit deze map): node run-v4.mjs <uitvoermap>
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, existsSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const buildDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2];
if (!outDir) throw new Error("Gebruik: node run-v4.mjs <uitvoermap>");
if (existsSync(outDir) && readdirSync(outDir).length) throw new Error(`${outDir} is niet leeg`);
mkdirSync(outDir, { recursive: true });
const workDir = mkdtempSync(join(tmpdir(), "build-run-"));

// Prompt: het ```text-blok uit prompt.md, afgeknipt na "ADVERTENTIE".
const promptMd = readFileSync(join(buildDir, "prompt.md"), "utf8").replace(/\r\n/g, "\n");
const block = promptMd.match(/```text\n([\s\S]*?)\n```/)[1];
const head = block.slice(0, block.indexOf("ADVERTENTIE\n") + "ADVERTENTIE\n".length);

// Advertenties: het eerste ```-blok onder elke "### Txx" in test-set.md.
const testSet = readFileSync(join(buildDir, "test-set.md"), "utf8").replace(/\r\n/g, "\n");
const ads = {};
for (let i = 1; i <= 10; i++) {
  const id = "T" + String(i).padStart(2, "0");
  const m = testSet.match(new RegExp(`### ${id}\\n[\\s\\S]*?\`\`\`\\n([\\s\\S]*?)\\n\`\`\``));
  ads[id] = m[1];
}

for (const run of [1, 2]) {
  for (const [id, ad] of Object.entries(ads)) {
    const input = head + ad + "\n";
    if (run === 1) writeFileSync(join(outDir, `${id}-input.txt`), input);
    // shell: true om de npm-shim van claude te vinden; "\"\"" geeft een lege --tools.
    const r = spawnSync("claude", [
      "-p", "--model", "haiku", "--tools", "\"\"", "--safe-mode", "--strict-mcp-config",
      "--no-session-persistence", "--output-format", "json",
    ], { cwd: workDir, input, encoding: "utf8", shell: true, timeout: 180000 });
    writeFileSync(join(outDir, `${id}-run${run}.raw.json`), r.stdout + (r.stderr ? "\nSTDERR:\n" + r.stderr : ""));
    let text = "";
    try { text = JSON.parse(r.stdout).result; } catch { text = "PARSE-FOUT"; }
    writeFileSync(join(outDir, `${id}-run${run}.txt`), text);
    console.log(id, "run", run, "klaar");
  }
}
console.log("Werkmap (leeg gebleven):", workDir);
