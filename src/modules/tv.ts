import {
    InstalmentOptions,
    ProgramOptions,
    SeasonOptions,
    SeriesOptions,
    TvPageOptions,
    TvSectionOptions,
    TvSubPagesOptions,
} from '../interfaces'
import { InvalidProgramIdError } from '../errors'
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
 * Get a given tv page, like frontDeskTv
 * @param {string} pageId - The id of the page
 * @param {TvPageOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getGivenTvPage('frontDeskTv', { limit: 2 })
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getGivenTvPage = async (
    pageId: string,
    options?: TvPageOptions
): Promise<any> => {
    const result = await request(
        `https://psapi.nrk.no/tv/pages/${pageId}`,
        options
    )

    return result
}

/**
 * Get all tv sub-pages
 * @param {TvSubPagesOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getAllTVSubPages()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getAllTVSubPages = async (
    options?: TvSubPagesOptions
): Promise<any> => {
    const result = await request(`https://psapi.nrk.no/tv/pages`, options)

    return result
}

/**
 * Get the front page of tv
 * @param {TvFrontPageOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTVFrontPage()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTVFrontPage = async (
    options?: TvPageOptions
): Promise<any> => {
    const result = await request(
        `https://psapi.nrk.no/tv/pages/frontpage`,
        options
    )

    return result
}

/**
 * Get the tv category page
 * @param {TvCategoryPageOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTVCategoryPage()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTVCategoryPage = async (
    options?: TvPageOptions
): Promise<any> => {
    const result = await request(
        `https://psapi.nrk.no/tv/pages/categories`,
        options
    )

    return result
}

/**
 * Get a given section for a tv page
 * @param {string} pageId - The id of the page
 * @param {string} sectionTitle - The title of the section
 * @param {TvSectionOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getGivenSectionForTVPage('frontDeskTv', 'anbefalt')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getGivenSectionForTVPage = async (
    pageId: string,
    sectionTitle: string,
    options?: TvSectionOptions
): Promise<any> => {
    sectionTitle = sectionTitle.toLowerCase()
    const result = await request(
        `https://psapi.nrk.no/tv/pages/${pageId}/${sectionTitle}`,
        options
    )

    return result
}

/**
 * Get a given offline tv page
 * @param {string} pageId - The id of the page
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getGivenOfflineTVPage('frontDeskTv')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getGivenOfflineTVPage = async (
    pageId: string
): Promise<any> => {
    const result = await request(
        `https://psapi.nrk.no/tv/pages/offline/${pageId}`
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
 * Get the front page of a program
 * @param {string} programId - The id of the program
 * @param {ProgramOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getProgramPage('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getProgramPage = async (
    programId: string,
    options?: ProgramOptions
): Promise<any> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/programs/${programId}`,
        options
    )

    return result
}

/**
 * Get the navigation aid for a program
 * @param {string} programId - The id of the program
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getNavigationAidForProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getNavigationAidForProgram = async (
    programId: string
): Promise<any> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/programsContext/${programId}}`
    )

    return result
}

/**
 * Get the navigation aid for a offline program
 * @param {string} programId - The id of the program
 * @param {ProgramOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getNavigationAidForOfflineProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getNavigationAidForOfflineProgram = async (
    programId: string,
    options?: ProgramOptions
): Promise<any> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/offlineProgramsContext/${programId}`,
        options
    )

    return result
}

/**
 * Gets the specified TV series
 * @param {string} seriesId - The id of the series
 * @param {SeriesOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTVSeries('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTVSeries = async (
    seriesId: string,
    options?: SeriesOptions
): Promise<any> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/series/${seriesId}`,
        options
    )

    return result
}

/**
 * Gets the specified TV series extramaterials
 * @param {string} seriesId - The id of the series
 * @param {ProgramOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTVSeriesExtramaterials('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTVSeriesExtramaterials = async (
    seriesId: string,
    options?: ProgramOptions
): Promise<any> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/series/${seriesId}/extramaterial`,
        options
    )

    return result
}

/**
 * Gets the type of the specified TV series
 * @param {string} seriesId - The id of the series
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTypeOfTVSeries('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTypeOfTVSeries = async (seriesId: string): Promise<any> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/series/${seriesId}/type`
    )

    return result
}

/**
 * Gets the specified TV series instalments
 * @param {string} seriesId - The id of the series
 * @param {InstalmentOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getTvSeriesInstalments('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getTvSeriesInstalments = async (
    seriesId: string,
    options?: InstalmentOptions
): Promise<any> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/series/${seriesId}/instalments`,
        options
    )

    return result
}

/**
 * Gets the specified TV series season
 * @param {string} seriesId - The id of the series
 * @param {string | number} seasonId - The id of the season
 * @param {SeasonOptions} options - The options for the request (default: undefined)
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getSeriesSeason('kongen-av-gulset', 1)
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getSeriesSeason = async (
    seriesId: string,
    seasonId: string | number,
    options?: SeasonOptions
): Promise<any> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await request(
        `https://psapi.nrk.no/tv/catalog/series/${seriesId}/seasons/${seasonId}`,
        options
    )

    return result
}

/**
 * Gets the dimensions for the specified program
 * @param {string} programId - The id of the program
 * @returns {Promise<any>} - The response from the query, a custom error, or an axios error for request failed
 * @example getDimensionsForProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getDimensionsForProgram = async (
    programId: string
): Promise<any> => {
    const result = await request(
        `https://psapi.nrk.no/tv/programs/pageviews/ga/${programId}`
    )

    return result
}
