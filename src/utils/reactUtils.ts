export const getDisplayName = (component: { displayName?: string, name?: string }): string =>
    component?.displayName?.toString() ?? component?.name?.toString() ?? 'Component'
