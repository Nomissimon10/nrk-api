import { ContentGroup } from '../enums'

export default interface TvCategoryPageOptions {
    userSegments?: string
    experimentId?: string
    variant?: number
    contentGroup?: ContentGroup
    age?: number
}
