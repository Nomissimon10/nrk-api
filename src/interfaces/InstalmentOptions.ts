import { AgeRestriction } from '../enums'

export default interface InstalmentOptions {
    pageSize?: number
    page?: number
    contentGroup?: string
    ageRestriction?: AgeRestriction
}
