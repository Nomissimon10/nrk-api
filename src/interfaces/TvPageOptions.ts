import { ContentGroup, Variant } from '../enums'

export default interface TvPageOptions {
    userSegments?: string
    experimentId?: string
    variant?: Variant
    limit?: number
    offset?: number
    imageProfile?: string
    contentGroup?: ContentGroup
    age?: number
}
