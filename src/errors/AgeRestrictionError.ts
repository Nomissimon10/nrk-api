export default class AgeRestrictionError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'AgeRestrictionError'
    }
}