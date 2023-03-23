import { AgeRestriction, ContentGroup } from '../enums'

export default interface InstalmentOptions {
    pageSize?: number
    page?: number
    contentGroup?: ContentGroup
    ageRestriction?: AgeRestriction
}
