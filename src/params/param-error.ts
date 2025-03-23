import { CustomError } from '@/custom-error'
import { ErrorStatusEnum } from '@/enums'

export abstract class ParamError extends CustomError {
  public constructor(message: string, details?: string) {
    super(message, ErrorStatusEnum.PARAM_ERROR, details)
  }
}
