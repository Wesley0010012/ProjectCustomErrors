import { CustomError } from '@/custom-error'
import { ErrorMessagesEnum } from '@/enums'
import { ErrorStatusEnum } from '@/enums'

export class NotFoundError extends CustomError {
  public constructor(messageOrEntity?: string, details?: string) {
    super(
      `${
        ErrorMessagesEnum.NOT_FOUND +
        (messageOrEntity ? `: ${messageOrEntity}` : '')
      }`,
      ErrorStatusEnum.NOT_FOUND,
      details
    )
  }
}
