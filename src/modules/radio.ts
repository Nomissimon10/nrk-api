import { RadioPageOptions } from '../interfaces'
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
 * Get all radio pages
 * @returns {Promise<Object>} All radio pages
 * @example getAllRadioPages()
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getAllRadioPages = async (): Promise<Object> => {
    const result = await request('https://psapi.nrk.no/radio/pages')

    return result
}

/**
 * Get the given radio page
 * @param {string} pageId - The id of the radio page
 * @param {RadioPageOptions} options - Options for the request (default: undefined)
 * @returns {Promise<Object>} The radio page
 * @example getRadioPage('discover')
 * @throws {PageNotFoundError} if the page doesn't exist
 * @throws {RateLimitError} if the rate limit is exceeded
 * @throws {AgeRestrictionError} if the item is age restricted
 * @throws {AxiosError} if the request fails
 */
export const getRadioPage = async (
    pageId: string,
    options?: RadioPageOptions
): Promise<Object> => {
    const result = await request(
        `https://psapi.nrk.no/radio/pages/${pageId}`,
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
