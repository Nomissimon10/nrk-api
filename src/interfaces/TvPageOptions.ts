import { ContentGroup } from "../enums"

export default interface TvPageOptions {
    userSegments?: string
    experimentId?: string
    variant?: number
    limit?: number
    offset?: number
    imageProfile?: string
    contentGroup?: ContentGroup
    age?: number
}