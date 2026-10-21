import test from "node:test";
import assert from "node:assert/strict";
import { findOrder, isValidOrderNumber } from "./orders.mjs";
import { collectionNotice } from "./notices.mjs";

test("vindt een bestelling bij exact bestelbonnummer en naam", () => {
  assert.equal(findOrder("10481", "Emma Peeters")?.expectedArrival, "18 oktober 2026");
});

test("vindt geen bestelling als de naam niet klopt", () => {
  assert.equal(findOrder("10481", "Iemand Anders"), null);
});

test("aanvaardt alleen een bestelbonnummer met vijf cijfers", () => {
  assert.equal(isValidOrderNumber("10481"), true);
  assert.equal(isValidOrderNumber("FORD-10481"), false);
  assert.equal(isValidOrderNumber("1048"), false);
});

test("legt na een bekende aankomst uit wat nog nodig is voor afhaling", () => {
  const notice = collectionNotice("18 oktober 2026");
  assert.match(notice, /verkoper neemt contact/);
  assert.match(notice, /ombouw/);
  assert.match(notice, /reiniging/);
  assert.match(notice, /nummerplaten en papieren/);
  assert.match(notice, /geen leverings- of afhaaldatum/);
});

test("voegt geen afhaalvoorbereiding toe als de aankomstdatum onbekend is", () => {
  assert.equal(collectionNotice("Nog niet bekend"), "");
});

test("vertaalt de vaste uitleg voor een Franse klant", () => {
  const notice = collectionNotice("18 oktober 2026", "Quand est-ce que ma voiture devrait arriver ?");
  assert.match(notice, /Attention/);
  assert.match(notice, /livraison ou d’enlèvement/);
  assert.doesNotMatch(notice, /Let op|verkoper neemt contact/);
});

test("vertaalt de vaste uitleg voor een Engelse klant", () => {
  const notice = collectionNotice("18 oktober 2026", "When will my car arrive at Ford Geeraerts?");
  assert.match(notice, /Please note/);
  assert.match(notice, /delivery or collection date/);
  assert.doesNotMatch(notice, /Let op|verkoper neemt contact/);
});

