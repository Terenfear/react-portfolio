export const getDisplayName = (component: { displayName?: string, name?: string }): string =>
    component?.displayName?.toString() ?? component?.name?.toString() ?? 'Component'

export const calculateFlexBasisExpr = (columnCount: number, gapPx: number): string =>
    `calc(calc(100% - ${gapPx * (columnCount - 1)}px) / ${columnCount})`
