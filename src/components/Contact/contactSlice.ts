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
    title: 'Contact Me',
    options: [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/',
            icon: ContactOptionIcon.LinkedIn
        },
        {
            name: 'Just mail me',
            url: 'mailto:test@example.com'
        }
    ]
}



const contactStateName = 'contact'
const contactSlice = createSlice({
    name: contactStateName,
    initialState,
    reducers: {
        updateContact: (_, action: PayloadAction<ContactState>) => action.payload
    }
})
type RootState = {
    [contactStateName]: ContactState
}
const { reducer, actions } = contactSlice
export const { updateContact } = actions
export const contactReducer = reducer
export default { [contactStateName]: contactReducer }

export const selectContactTitle =
    (rootState: RootState): string => {
        return rootState.contact.title
    }
const _selectContactOptions = (rootState: RootState): ContactOption[] => rootState.contact.options
export const selectContactOptions = [
    _selectContactOptions,
    shallowEqual
] as const

