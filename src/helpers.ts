export function isNumber(c: string): boolean {
  return c >= "0" && c <= "9";
}

export function stripZeros(s: string): string {
  let zeroRemoveIndex = s.length;
  let zeroMode = true;
  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];
    if (zeroMode) {
      // Looking for trailing zeros
      if (c === "0") {
        zeroRemoveIndex--;
      } else if (c === ".") {
        return s.substring(0, zeroRemoveIndex - 1);
      } else {
        zeroMode = false;
      }
    } else if (c === ".") {
      // Dot found, trim
      return s.substring(0, zeroRemoveIndex);
    } else if (!isNumber(c)) {
      // Other char, abort
      return s;
    }
  }
  // Base case
  return s;
}
