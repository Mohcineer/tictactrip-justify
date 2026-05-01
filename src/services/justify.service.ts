export function justifyText(text: string, maxLength: number = 80): string {
  if (!text.trim()) return "";
  
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const lines: string[] = [];

  let currentLine: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    // On vérifie si l'ajout du mot dépasse la limite (mot + espaces minimum)
    if (currentLength + word.length + currentLine.length > maxLength) {
      lines.push(formatLine(currentLine, currentLength, maxLength));
      currentLine = [];
      currentLength = 0;
    }

    currentLine.push(word);
    currentLength += word.length;
  }

  // Dernière ligne (alignée à gauche seulement)
  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.join("\n");
}

function formatLine(words: string[], length: number, max: number): string {
  const gaps = words.length - 1;
  const firstWord = words[0] ?? ""; // Sécurité pour TS

  // Cas : un seul mot dans la ligne
  if (gaps < 1) {
    return firstWord.padEnd(max, " ");
  }

  const totalSpacesNeeded = max - length;
  const baseSpace = Math.floor(totalSpacesNeeded / gaps);
  const extraSpaces = totalSpacesNeeded % gaps;

  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i] ?? ""; // Sécurité pour TS
    result += word;

    if (i < gaps) {
      // On ajoute l'espace de base + 1 espace normal + l'éventuel espace bonus (extra)
      const spacesToApply = baseSpace + (i < extraSpaces ? 1 : 0);
      result += " ".repeat(spacesToApply + 1);
    }
  }

  return result;
}