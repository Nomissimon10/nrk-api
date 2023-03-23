import { Variant } from '../enums'

export default interface RadioPageOptions {
    userSegments?: string
    experiementId?: string
    variant?: Variant
    limit?: number
    offset?: number
}
