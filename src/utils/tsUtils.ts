type RecordKey<T> = T extends Record<infer U, unknown> ? U : never

export const getDynamicProperty =
    <T extends Record<string, unknown>, U extends RecordKey<T>>(obj: T, key: U): T[U] => obj[key]

export const asObjectOrUndefined = (obj: unknown) => {
    if (typeof obj === 'object' && obj !== null) {
        return obj
    } else {
        return undefined
    }
}
