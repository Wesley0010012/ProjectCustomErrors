import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum, ErrorStatusEnum } from '@/enums'

export class DomainError extends CustomError {
  public constructor(message: string, details?: string) {
    super(
      `${ErrorMessagesEnum.DOMAIN_ERROR}: ${message}`,
      ErrorStatusEnum.DOMAIN_ERROR,
      details
    )
  }
}
