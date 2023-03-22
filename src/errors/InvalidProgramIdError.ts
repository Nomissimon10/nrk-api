export default class InvalidProgramIdError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidProgramIdError'
    }
}