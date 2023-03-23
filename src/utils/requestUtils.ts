import axios from 'axios'
import {
    AgeRestrictionError,
    PageNotFoundError,
    RateLimitError,
} from '../errors'
import { interfaceToQuery } from '.'

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

    return result
}
