import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum, ErrorStatusEnum } from '@/enums'

export class EntityError extends CustomError {
  public constructor(message: string, details?: string) {
    super(
      `${ErrorMessagesEnum.ENTITY_ERROR}: ${message}`,
      ErrorStatusEnum.ENTITY_ERROR,
      details
    )
  }
}
