import { AgeRestriction, ContentGroup } from '../enums'

export default interface SeriesOptions {
    embeddedInstalmentsPageSize?: number
    embed?: boolean
    contentGroup?: ContentGroup
    ageRestriction?: AgeRestriction
}
