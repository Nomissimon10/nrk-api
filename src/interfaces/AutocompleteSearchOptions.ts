import { Medium } from '../enums'

export default interface AutocompleteSearchOptions {
    q: string
    medium?: Medium
    superFilter?: boolean
    viewerageLimit?: number
    includePodcasts?: boolean
    size?: number
}
