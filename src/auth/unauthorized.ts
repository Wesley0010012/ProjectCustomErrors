import { ErrorMessagesEnum } from '@/enums'
import { AuthenticationError } from './authentication-error'

export class Unauthorized extends AuthenticationError {
  public constructor(details?: string) {
    super(ErrorMessagesEnum.UNAUTHORIZED, details)
  }
}
