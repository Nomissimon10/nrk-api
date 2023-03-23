import axios from 'axios'
import {
    AgeRestrictionError,
    PageNotFoundError,
    RateLimitError,
} from '../errors'
import { interfaceToQuery } from '.'

/**
 * Makes a request to the NRK API
 * @param {string} url - The url to request
 * @param {interface} options - The options to be passed as query parameters
 * @returns {Promise<Object>} The response
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const request = async (url: string, options?: any) => {
    const queryParameter = interfaceToQuery(options)

    const result = await axios.get(`${url}?${queryParameter}`).catch((e) => {
        if (e.response.status === 404)
            return new PageNotFoundError("Tv Page doesn't exist")
        else if (e.response.status === 429)
            return new RateLimitError(
                'Rate limit exceeded, try again later (429)'
            )
        else if (e.response.status === 403)
            return new AgeRestrictionError('This item is age restricted')

        return e
    })

    if (result instanceof Error) return result
    return result.data
}
