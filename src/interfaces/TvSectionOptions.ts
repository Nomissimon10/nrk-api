import { ContentGroup, Variant } from '../enums'

export default interface TvCategoryPageOptions {
    userSegments?: string
    experimentId?: string
    variant?: Variant
    contentGroup?: ContentGroup
    age?: number
}
