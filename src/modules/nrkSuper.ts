import { InvalidProgramIdError, PageNotFoundError } from '../errors'
import {
    NRKSuperMetadataSeriesOptions,
    NRKSuperPageOptions,
    SuperInstalmentOptions,
} from '../interfaces'
import { request } from '../utils'

/**
   ______ _____   ____  _   _ _______             _____       _______ ______ _____  ____  _______     __     _____        _____ ______  _____ 
 |  ____|  __ \ / __ \| \ | |__   __|   ___     / ____|   /\|__   __|  ____/ ____|/ __ \|  __ \ \   / /    |  __ \ /\   / ____|  ____|/ ____|
 | |__  | |__) | |  | |  \| |  | |     ( _ )   | |       /  \  | |  | |__ | |  __| |  | | |__) \ \_/ /_____| |__) /  \ | |  __| |__  | (___  
 |  __| |  _  /| |  | | . ` |  | |     / _ \/\ | |      / /\ \ | |  |  __|| | |_ | |  | |  _  / \   /______|  ___/ /\ \| | |_ |  __|  \___ \ 
 | |    | | \ \| |__| | |\  |  | |    | (_>  < | |____ / ____ \| |  | |___| |__| | |__| | | \ \  | |       | |  / ____ \ |__| | |____ ____) |
 |_|    |_|  \_\\____/|_| \_|  |_|     \___/\/  \_____/_/    \_\_|  |______\_____|\____/|_|  \_\ |_|       |_| /_/    \_\_____|______|_____/ 
*/

/**
 * Get all NRK Super pages
 * @returns {Promise<Object>} Returns all NRK Super pages
 * @example getAllSuperPages()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getAllSuperPages = async (): Promise<Object> => {
    const result = await request(`https://psapi.nrk.no/super/pages`)

    return result.data
}

/**
 * Get a NRK Super page
 * @param {string} pageId - The ID of the NRK Super page
 * @param {NRKSuperPageOptions} options - Options for the NRK Super page
 * @returns {Promise<Object>} - Returns a NRK Super page
 * @example getNRKSuperPage('superforside')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getNRKSuperPage = async (
    pageId: string,
    options?: NRKSuperPageOptions
): Promise<Object> => {
    const result = await request(
        `https://psapi.nrk.no/super/pages/${pageId}`,
        options
    )

    return result
}

/**
  _____  _____   ____   _____ _____            __  __  _____             _____ ______ _____  _____ ______  _____       _____        _____ ______  _____ 
 |  __ \|  __ \ / __ \ / ____|  __ \     /\   |  \/  |/ ____|   ___     / ____|  ____|  __ \|_   _|  ____|/ ____|     |  __ \ /\   / ____|  ____|/ ____|
 | |__) | |__) | |  | | |  __| |__) |   /  \  | \  / | (___    ( _ )   | (___ | |__  | |__) | | | | |__  | (___ ______| |__) /  \ | |  __| |__  | (___  
 |  ___/|  _  /| |  | | | |_ |  _  /   / /\ \ | |\/| |\___ \   / _ \/\  \___ \|  __| |  _  /  | | |  __|  \___ \______|  ___/ /\ \| | |_ |  __|  \___ \ 
 | |    | | \ \| |__| | |__| | | \ \  / ____ \| |  | |____) | | (_>  <  ____) | |____| | \ \ _| |_| |____ ____) |     | |  / ____ \ |__| | |____ ____) |
 |_|    |_|  \_\\____/ \_____|_|  \_\/_/    \_\_|  |_|_____/   \___/\/ |_____/|______|_|  \_\_____|______|_____/      |_| /_/    \_\_____|______|_____/ 
 */

/**
 * Get metadata from a NRK Super program
 * @param {string} programId - The ID of the NRK Super program
 * @returns {Promise<Object>} - Returns metadata from a NRK Super program
 * @example getSuperProgramMetadata('MSUS08000119')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperProgramMetadata = async (
    programId: string
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/programs/${programId}`
    )

    return result
}

/**
 * Get dimensions for a NRK Super program
 * @param {string} programId - The ID of the NRK Super program
 * @returns {Promise<Object>} - Returns dimensions for a NRK Super program
 * @example getSuperProgramDimensions('MSUS08000119')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperProgramDimensions = async (
    programId: string
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/programs/${programId}/pageviews/ga`
    )

    return result
}

/**
 * Get a NRK Super program link
 * @param {string} programId - The ID of the NRK Super program
 * @returns {Promise<Object>} - Returns a NRK Super program link
 * @example getSuperProgramLink('MSUS08000119')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperProgramLink = async (
    programId: string
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/programlinks/${programId}`
    )

    return result
}

/**
 * Get a NRK Super series metadata
 * @param {string} seriesId - The ID of the NRK Super series
 * @param {NRKSuperMetadataSeriesOptions} options - Options for the NRK Super series
 * @returns {Promise<Object>} - Returns a NRK Super series metadata
 * @example getSuperSeriesMetadata('supernytt')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperSeriesMetadata = async (
    seriesId: string,
    options?: NRKSuperMetadataSeriesOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/series/${seriesId}`,
        options
    )

    return result
}

/**
 * Get the type of series
 * @param {string} seriesId - The ID of the NRK Super series
 * @returns {Promise<Object>} - Returns the type of series
 * @example getSuperTypeSeries('supernytt')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperTypeSeries = async (seriesId: string): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/series/${seriesId}/type`
    )

    return result
}

/**
 * Get the extramaterial of a series
 * @param {string} seriesId - The ID of the NRK Super series
 * @returns {Promise<Object>} - Returns the extramaterial of a series
 * @example getSuperSeriesExtramaterial('supernytt')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperSeriesExtramaterial = async (
    seriesId: string
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/series/${seriesId}/extramaterial`
    )
    if (result instanceof PageNotFoundError)
        return new PageNotFoundError(
            'This series does not have any extramaterial'
        )

    return result
}

/**
 * Get the instalments of a series
 * @param {string} seriesId - The ID of the NRK Super series
 * @param {SuperInstalmentOptions} options - Options for the NRK Super series
 * @returns {Promise<Object>} - Returns the instalments of a series
 * @example getSuperSeriesInstalments('supernytt')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSuperSeriesInstalments = async (
    seriesId: string,
    options?: SuperInstalmentOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/series/${seriesId}/instalments`,
        options
    )

    return result
}

export const getSuperSeason = async (
    seriesId: string,
    seasonId: string
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/super/catalog/series/${seriesId}/seasons/${seasonId}`
    )

    return result
}
