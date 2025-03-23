import { ErrorMessagesEnum } from '@/enums'
import { ParamError } from './param-error'

export class InvalidParamError extends ParamError {
  public constructor(param: string, details?: string) {
    super(`${ErrorMessagesEnum.INVALID_PARAM_ERROR}: ${param}`, details)
  }
}
