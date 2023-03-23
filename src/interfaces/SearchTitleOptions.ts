import { ContentGroup } from "../enums"

export default interface SearchTitleOptions {
    q: string
    age?: number
    contentGroup?: ContentGroup
}
