import { AgeRestriction } from '../enums'

export default interface SeriesOptions {
    embeddedInstalmentsPageSize?: number
    embed?: boolean
    contentGroup?: string
    ageRestriction?: AgeRestriction
}
