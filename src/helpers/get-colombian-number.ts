export function getColombianNumber(str: string): string {
  const startIndex = str.indexOf("57") - 1;
  const endIndex = str.indexOf("@");
  return str.substring(startIndex, endIndex);
}
