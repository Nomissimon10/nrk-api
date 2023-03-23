import { AgeRestriction, ContentGroup } from '../enums'

export default interface SeasonOptions {
    embed?: boolean
    contentGroup?: ContentGroup
    ageRestriction?: AgeRestriction
}
