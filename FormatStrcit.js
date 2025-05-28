function formatSentence(string) {
  // On nettoie les espaces en trop
  let trimmed = string.trim()
  let cleanSpaces = trimmed.replace(/\s+/g, " ")

  // On met la première lettre en majuscule, le reste en minuscule
  let formatted = cleanSpaces.charAt(0).toUpperCase() + cleanSpaces.slice(1).toLowerCase()

  // On s'assure que la phrase finit par un point unique
  formatted = formatted.replace(/\.*$/, "") + "."

  console.log("Résultat :", formatted)
  return formatted
}

formatSentence("   jE  suis    en retard...  ");

// → "Je suis en retard."

formatSentence("bonjour le   monde  ");

// → "Bonjour le monde."
