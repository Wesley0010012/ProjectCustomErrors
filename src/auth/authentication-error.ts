import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum, ErrorStatusEnum } from '@/enums'

export abstract class AuthenticationError extends CustomError {
  public constructor(message: string, details?: string) {
    super(
      `${ErrorMessagesEnum.AUTHENTICATION_ERROR}: ${message}`,
      ErrorStatusEnum.AUTHENTICATION_ERROR,
      details
    )
  }
}
