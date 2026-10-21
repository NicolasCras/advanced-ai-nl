function isFrench(question) {
  return /\b(quand|voiture|arriver|livraison|enl[eè]vement|bonjour|merci)\b/i.test(question);
}

function isEnglish(question) {
  return /\b(when|car|arrive|delivery|collection|hello|please|thank)\b/i.test(question);
}

export function collectionNotice(expectedArrival, question = "") {
  if (expectedArrival === "Nog niet bekend") return "";

  if (isFrench(question)) {
    return [
      "Attention : il s’agit de la date d’arrivée prévue au garage, et non d’une date de livraison ou d’enlèvement.",
      "Le vendeur vous contactera afin de convenir d’une date pour la livraison de votre véhicule.",
      "Le planning final dépend notamment d’une éventuelle transformation, du nettoyage, des plaques d’immatriculation et des documents."
    ].join(" ");
  }

  if (isEnglish(question)) {
    return [
      "Please note: this is the expected arrival date at the garage, not a delivery or collection date.",
      "The salesperson will contact you to arrange the delivery of your vehicle.",
      "The final planning may depend on factors such as any conversion work, cleaning, number plates and documents."
    ].join(" ");
  }

  return [
    "Let op: dit is de verwachte aankomstdatum bij de garage, geen leverings- of afhaaldatum.",
    "De verkoper neemt contact met u op om een datum voor de levering aan u vast te leggen.",
    "De uiteindelijke planning hangt onder meer af van een eventuele ombouw, de reiniging, nummerplaten en papieren."
  ].join(" ");
}
