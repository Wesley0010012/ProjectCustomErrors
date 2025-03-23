import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum } from '@/enums'
import { ErrorStatusEnum } from '@/enums'

export class InternalError extends CustomError {
  public constructor(details?: string) {
    super(
      ErrorMessagesEnum.INTERNAL_ERROR,
      ErrorStatusEnum.INTERNAL_ERROR,
      details
    )
  }
}
