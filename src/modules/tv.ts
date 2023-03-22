import axios, { AxiosError } from 'axios'
import {
    InstalmentOptions,
    ProgramOptions,
    SeasonOptions,
    SeriesOptions,
    TvCategoryPageOptions,
    TvFrontPageOptions,
    TvPageOptions,
    TvSectionOptions,
    TvSubPagesOptions,
} from '../interfaces'
import {
    PageNotFoundError,
    RateLimitError,
    InvalidProgramIdError,
} from '../errors'
import { interfaceToQuery } from '../utils'

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
 * @returns {Object} - The response from the request or an axios error
 * @example getGivenTvPage('frontDeskTv', { limit: 2 })
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getGivenTvPage = async (
    pageId: string,
    options?: TvPageOptions
): Promise<Object> => {
    let queryParameter = interfaceToQuery(options)

    const result = await axios
        .get(`https://psapi.nrk.no/tv/pages/${pageId}?${queryParameter}`)
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Tv Page doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError(
                    'Rate limit exceeded, try again later (429)'
                )
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get all tv sub-pages
 * @param {TvSubPagesOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getAllTVSubPages()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getAllTVSubPages = async (
    options?: TvSubPagesOptions
): Promise<Object> => {
    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(`https://psapi.nrk.no/tv/pages?${queryParameter}`)
        .catch((e) => {
            if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get the front page of tv
 * @param {TvFrontPageOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getTVFrontPage()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTVFrontPage = async (
    options?: TvFrontPageOptions
): Promise<Object> => {
    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(`https://psapi.nrk.no/tv/pages/frontpage?${queryParameter}`)
        .catch((e) => {
            if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get the tv category page
 * @param {TvCategoryPageOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getTVCategoryPage()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTVCategoryPage = async (
    options?: TvCategoryPageOptions
): Promise<Object> => {
    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(`https://psapi.nrk.no/tv/pages/categories?${queryParameter}`)
        .catch((e) => {
            if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get a given section for a tv page
 * @param {string} pageId - The id of the page
 * @param {string} sectionTitle - The title of the section
 * @param {TvSectionOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getGivenSectionForTVPage('frontDeskTv', 'anbefalt')
 * @throws {PageNotFoundError} if the page or section title doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getGivenSectionForTVPage = async (
    pageId: string,
    sectionTitle: string,
    options?: TvSectionOptions
): Promise<Object> => {
    sectionTitle = sectionTitle.toLowerCase()
    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/pages/${pageId}/${sectionTitle}?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError(
                    "Tv Page or Section Title doesn't exist"
                )
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get a given offline tv page
 * @param {string} pageId - The id of the page
 * @returns {Object} - The response from the request or an axios error
 * @example getGivenOfflineTVPage('frontDeskTv')
 * @throws {PageNotFoundError} if the page doesn't exist or is not downloadable
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getGivenOfflineTVPage = async (
    pageId: string
): Promise<Object> => {
    const result = await axios
        .get(`https://psapi.nrk.no/tv/pages/offline/${pageId}`)
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError(
                    "Tv Page doesn't exist or is not Downloadable"
                )
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
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
 * @returns {Object} - The response from the request or an axios error
 * @example getProgramPage('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} - If the program page doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getProgramPage = async (
    programId: string,
    options?: ProgramOptions
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/programs/${programId}?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError('Program not found')
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get the navigation aid for a program
 * @param {string} programId - The id of the program
 * @returns {Object} - The response from the request or an axios error
 * @example getNavigationAidForProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} - If the program doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getNavigationAidForProgram = async (
    programId: string
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const result = await axios
        .get(`https://psapi.nrk.no/tv/catalog/programsContext/${programId}}`)
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Program doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Get the navigation aid for a offline program
 * @param {string} programId - The id of the program
 * @param {ProgramOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getNavigationAidForOfflineProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} - If the program doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getNavigationAidForOfflineProgram = async (
    programId: string,
    options?: ProgramOptions
): Promise<Object> => {
    const regex1 = /^\w{4}\d{8}$/
    const regex2 = /^\w{4}\d{8}\w{4}$/
    if (!regex1.test(programId) && !regex2.test(programId))
        return new InvalidProgramIdError('Invalid Program Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/offlineProgramsContext/${programId}?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Program doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the specified TV series
 * @param {string} seriesId - The id of the series
 * @param {SeriesOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getTVSeries('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} - If the series doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTVSeries = async (
    seriesId: string,
    options?: SeriesOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/series/${seriesId}?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Series doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the specified TV series extramaterials
 * @param {string} seriesId - The id of the series
 * @param {ProgramOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getTVSeriesExtramaterials('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} - If the series doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTVSeriesExtramaterials = async (
    seriesId: string,
    options?: ProgramOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/series/${seriesId}/extramaterial?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Series doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the type of the specified TV series
 * @param {string} seriesId - The id of the series
 * @returns {Object} - The response from the request or an axios error
 * @example getTypeOfTVSeries('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} - If the series doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTypeOfTVSeries = async (seriesId: string): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const result = await axios
        .get(`https://psapi.nrk.no/tv/catalog/series/${seriesId}/type`)
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Series doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the specified TV series instalments
 * @param {string} seriesId - The id of the series
 * @param {InstalmentOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getTvSeriesInstalments('kongen-av-gulset')
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} - If the series doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getTvSeriesInstalments = async (
    seriesId: string,
    options?: InstalmentOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/series/${seriesId}/instalments?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Series doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the specified TV series season
 * @param {string} seriesId - The id of the series
 * @param {string | number} seasonId - The id of the season
 * @param {SeasonOptions} options - The options for the request (default: undefined)
 * @returns {Object} - The response from the request or an axios error
 * @example getSeriesSeason('kongen-av-gulset', 1)
 * @throws {InvalidProgramIdError} - If the series id is invalid
 * @throws {PageNotFoundError} - If the series or season doesn't exist
 * @throws {RateLimitError} - If the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getSeriesSeason = async (
    seriesId: string,
    seasonId: string | number,
    options?: SeasonOptions
): Promise<Object> => {
    const regex = /^\w+(?:-\w+)*$/
    if (!regex.test(seriesId))
        return new InvalidProgramIdError('Invalid Series Id')

    const queryParameter = interfaceToQuery(options)
    const result = await axios
        .get(
            `https://psapi.nrk.no/tv/catalog/series/${seriesId}/seasons/${seasonId}?${queryParameter}`
        )
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Series or season doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}

/**
 * Gets the dimensions for the specified program
 * @param {string} programId - The id of the program
 * @returns {Object} - The response from the request or an axios error
 * @example getDimensionsForProgram('KOIF75001319')
 * @throws {InvalidProgramIdError} - If the program id is invalid
 * @throws {PageNotFoundError} - If the program doesn't exist
 * @throws {AxiosError} if the request fails
 */
export const getDimensionsForProgram = async (
    programId: string
): Promise<Object> => {
    const result = await axios
        .get(`https://psapi.nrk.no/tv/programs/pageviews/ga/${programId}`)
        .catch((e) => {
            if (e.response.status === 404)
                return new PageNotFoundError("Program doesn't exist")
            else if (e.response.status === 429)
                return new RateLimitError('Too many requests')
            return e
        })

    if (result instanceof Error) return result
    return result.data
}
