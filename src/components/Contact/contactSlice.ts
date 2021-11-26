import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export const enum ContactOptionIcon {
    LinkedIn = 'LINKED_IN'
}

export type ContactOption = {
    name: string,
    url: string,
    icon?: ContactOptionIcon
}

export type ContactState = {
    title: string,
    options: ContactOption[]
}

const initialState: ContactState = {
    title: '',
    options: []
}

const contactStateName = 'contact'
const contactSlice = createSlice({
    name: contactStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<ContactState>) => action.payload
    }
})
type RootState = {
    [contactStateName]: ContactState
}
const { reducer, actions } = contactSlice
export const contactActions = actions

export const selectContactTitle =
    (rootState: RootState): string => {
        return rootState.contact.title
    }
const _selectContactOptions = (rootState: RootState): ContactOption[] => rootState.contact.options
export const selectContactOptions = [
    _selectContactOptions,
    shallowEqual
] as const

export default { [contactStateName]: reducer }
