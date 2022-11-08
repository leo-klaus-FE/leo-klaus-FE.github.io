/**
 * Capitalises the first letter of a string and replaces _ with a space.
 * @param text string to normalise (i.e ACCOUNT_MANAGER)
 * @returns normalised string (i.e Account manager)
 */
export const normaliseRole = (text:string): string => {
    return (text[0].toUpperCase() + text.substring(1).toLowerCase()).replace('_', ' ');
}