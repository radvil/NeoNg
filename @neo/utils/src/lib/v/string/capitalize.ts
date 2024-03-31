/**
 * Converts the first letter of a string value to uppercase
 * and the reset stays lower case.
 *
 * @example
 *
 * capitalize('NEO') // 'Neo'
 * capitalize('injoker') // 'Injoker'
 */
export const capitalize = (value: string | undefined | null): string => {
  if (!value) return "";
  const trailing = value.slice(1);
  return value[0].toUpperCase() + trailing;
};
