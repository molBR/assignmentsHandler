export class BuisnessError extends Error {
    constructor(message, fieldName) {
      super(message)
      this.fieldName = fieldName
    }
 }