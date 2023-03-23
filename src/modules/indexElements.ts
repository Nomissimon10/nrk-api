import { Medium } from '../enums'
import { SuperUniverseOptions } from '../interfaces'
import { request } from '../utils'

/**
  _____ _   _ _____  ________   __     ______ _      ______ __  __ ______ _   _ _______ _____ 
 |_   _| \ | |  __ \|  ____\ \ / /    |  ____| |    |  ____|  \/  |  ____| \ | |__   __/ ____|
   | | |  \| | |  | | |__   \ V /_____| |__  | |    | |__  | \  / | |__  |  \| |  | | | (___  
   | | | . ` | |  | |  __|   > <______|  __| | |    |  __| | |\/| |  __| | . ` |  | |  \___ \ 
  _| |_| |\  | |__| | |____ / . \     | |____| |____| |____| |  | | |____| |\  |  | |  ____) |
 |_____|_| \_|_____/|______/_/ \_\    |______|______|______|_|  |_|______|_| \_|  |_| |_____/ 
 */

/**
 * Get all letters from a medium
 * @param {Medium} medium - The medium to get letters from
 * @returns {Promise<Object>} - Returns all letters from a medium
 * @example getAllLettersFromMedium(Medium.TV)
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 * @throws {Error} if the letter is longer than one character
 */
export const getAllLettersFromMedium = async (
    medium: Medium
): Promise<Object> => {
    const result = await request(
        `https://psapi.nrk.no/medium/${medium}/letters`
    )

    return result
}

/**
 * Get index elements from a medium
 * @param {Medium} medium - The medium to get index elements from
 * @param {string} letter - The letter to get index elements from
 * @param {SuperUniverseOptions} options - Options for the index elements
 * @returns {Promise<Object>} - Returns index elements from a medium
 * @example getIndexElementsFromMedium(Medium.TV, 'a')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AxiosError} if the request fails
 */
export const getIndexElementsFromMedium = async (
    medium: Medium,
    letter: string,
    options?: SuperUniverseOptions
): Promise<Object> => {
    if (letter.length > 1) throw new Error('Letter must be a single character')

    const result = await request(
        `https://psapi.nrk.no/medium/${medium.toLowerCase()}/letters/${letter}/indexelements`,
        options
    )

    return result
}
