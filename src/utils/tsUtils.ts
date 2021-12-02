export const getDynamicProperty =
    <K extends keyof any, T extends Record<K, unknown>>
        (obj: T, key: K): T[K] => obj[key]

export const asRecordOrUndefined = (obj: unknown): Record<keyof any, unknown> | undefined => {
    if (isRecord(obj)) {
        return obj
    } else {
        return undefined
    }
}

export const isRecord = (obj: unknown): obj is Record<keyof any, unknown> =>
    typeof obj === 'object' && obj !== null
