/**
 * Calculates a Java-like hash code of specified string.
 * @param s string to encode
 * @returns 32-bit integer hash code
 * @author [wes](https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)
 */
export const hashCode = (s: string): number => {
    let hash = 0, i, chr
    if (s.length === 0) return hash
    for (i = 0; i < s.length; i++) {
        chr = s.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}
