import { ErrorMessagesEnum } from '@/enums'
import { ParamError } from './param-error'

export class MissingParamError extends ParamError {
  public constructor(param: string, details?: string) {
    super(`${ErrorMessagesEnum.MISSING_PARAM_ERROR}: ${param}`, details)
  }
}
