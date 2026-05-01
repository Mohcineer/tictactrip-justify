export function justifyText(text: string, maxLength: number = 80): string {
  if (!text.trim()) return "";
  
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const lines: string[] = [];

  let currentLine: string[] = [];
  let currentLength = 0;

  for (const word of words) {
 
    if (currentLength + word.length + currentLine.length > maxLength) {
      lines.push(formatLine(currentLine, currentLength, maxLength));
      currentLine = [];
      currentLength = 0;
    }

    currentLine.push(word);
    currentLength += word.length;
  }


  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.join("\n");
}

function formatLine(words: string[], length: number, max: number): string {
  const gaps = words.length - 1;
  const firstWord = words[0] ?? ""; 

  if (gaps < 1) {
    return firstWord.padEnd(max, " ");
  }

  const totalSpacesNeeded = max - length;
  const baseSpace = Math.floor(totalSpacesNeeded / gaps);
  const extraSpaces = totalSpacesNeeded % gaps;

  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i] ?? ""; 
    result += word;

    if (i < gaps) {
  
      const spacesToApply = baseSpace + (i < extraSpaces ? 1 : 0);
      result += " ".repeat(spacesToApply + 1);
    }
  }

  return result;
}
