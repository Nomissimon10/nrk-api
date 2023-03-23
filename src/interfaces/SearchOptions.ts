export default interface SearchOptions {
    q: string
    page?: string
    maxResultsPerPage?: number
    includeHighLights?: boolean
    medium?: string
    superFilter?: boolean
    categories?: string
    viewerageLimit?: number
    includePodcasts?: boolean
}
