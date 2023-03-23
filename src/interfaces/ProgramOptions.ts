import { AgeRestriction, ContentGroup } from '../enums'

export default interface ProgramOptions {
    contentGroup?: ContentGroup
    ageRestriction?: AgeRestriction
}
