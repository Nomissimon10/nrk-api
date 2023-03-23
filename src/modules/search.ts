import { SearchError } from '../errors'
import {
    AutocompleteSearchOptions,
    SearchOptions,
    SearchPopularOptions,
    SearchTitleOptions,
} from '../interfaces'
import { request } from '../utils'

/**
    _____ ______          _____   _____ _    _ 
  / ____|  ____|   /\   |  __ \ / ____| |  | |
 | (___ | |__     /  \  | |__) | |    | |__| |
  \___ \|  __|   / /\ \ |  _  /| |    |  __  |
  ____) | |____ / ____ \| | \ \| |____| |  | |
 |_____/|______/_/    \_\_|  \_\\_____|_|  |_|
 */

/**
 * Search for content
 * @param {SearchOptions} q Search query
 * @returns {Promise<Object>} Search result
 * @example search({ q: 'Exit' })
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const search = async (q: SearchOptions): Promise<Object> => {
    if (q.q.length > 30)
        return new SearchError('Query too long, max 30 characters')
    const result = await request('https://psapi.nrk.no/search', q)

    return result
}

/**
 * Search for content with autocomplete
 * @param {AutocompleteSearchOptions} q Search query
 * @returns {Promise<Object>} Search result
 * @example searchAutocomplete({ q: 'Exit' })
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const searchAutocomplete = async (
    q: AutocompleteSearchOptions
): Promise<Object> => {
    if (q.q.length > 30)
        return new SearchError('Query too long, max 30 characters')
    const result = await request('https://psapi.nrk.no/autocomplete', q)

    return result
}

/**
 * Seach for tv titles
 * @param {SearchTitleOptions} q Search query
 * @returns {Promise<Object>} Search result
 * @example searchTvTitles({ q: 'Exit' })
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const searchTvTitles = async (
    q: SearchTitleOptions
): Promise<Object> => {
    if (q.q.length > 30)
        return new SearchError('Query too long, max 30 characters')
    const result = await request('https://psapi.nrk.no/tv/titleSearch', q)

    return result
}

/**
 * Search for tv titles by id
 * @param {string} id Search query
 * @returns {Promise<Object>} Search result
 * @example searchById('KOIF75001319')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const searchById = async (id: string): Promise<Object> => {
    const result = await request(
        `https://psapi.nrk.no/tv/titleSearch/get?id=${id}`
    )

    return result
}

/**
 * Search for tv titles by ids
 * @param {string[]} ids Search query
 * @returns {Promise<Object>} Search result
 * @example searchByIds(['KOIF75001319', 'KOIF75001320'])
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const searchByIds = async (ids: string[]): Promise<Object> => {
    const result = await request(
        `https://psapi.nrk.no/tv/titleSearch/get?ids=${ids.join(',')}`
    )

    return result
}

/**
 * Search for popular tv titles
 * @param {SearchPopularOptions} q Search query
 * @returns {Promise<Object>} Search result
 * @example searchPopularTv()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const searchPopularTv = async (
    q?: SearchPopularOptions
): Promise<Object> => {
    const result = await request('https://psapi.nrk.no/tv/popularSearch', q)

    return result
}
