export class NotFoundError extends Error {
    constructor(message, fieldName) {
      super(message)
      this.fieldName = fieldName
    }
 }