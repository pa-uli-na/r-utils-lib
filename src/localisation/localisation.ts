/** Czy wskazany kod jest adresem lokalizacji magazynowej? */
export const isLocalisationCode = (code: string | number): boolean => {
  const addressWithSpace = /^\d{4}\s\d{2}/;
  const address = /^\d{6}/;
  return addressWithSpace.test(String(code)) || address.test(String(code));
};
