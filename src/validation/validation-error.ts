import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum } from '@/enums'
import { ErrorStatusEnum } from '@/enums'

export class ValidationError extends CustomError {
  public constructor(message: string, details?: string) {
    super(
      `${ErrorMessagesEnum.VALIDATION_ERROR}: ${message}`,
      ErrorStatusEnum.VALIDATION_ERROR,
      details
    )
  }
}
