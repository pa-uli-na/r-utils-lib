/** Czy jest to numer DAN?
 * - tylko ciąg liczb
 * - długość od 2 do 8 znaków
 */
const isDanCode = (code: string | number): boolean =>
  /^\d{2,8}/.test(String(code));

/** Czy jest to numer EAN?
 * - tylko ciąg liczb
 * - długość od 6 do 13 znaków
 */
const isEanCode = (code: string | number): boolean =>
  /^\d{6,13}/.test(String(code));

/** Czy jest to kod artykułu?
 * - tylko ciąg liczb
 * - długość 2 do 13 znaków
 */
const isArticleCode = (code: string | number): boolean =>
  isDanCode(code) || isEanCode(code);

export { isDanCode, isEanCode, isArticleCode };
