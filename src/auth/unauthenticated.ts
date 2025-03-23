import { ErrorMessagesEnum } from '@/enums'
import { AuthenticationError } from './authentication-error'

export class Unauthenticated extends AuthenticationError {
  public constructor(details?: string) {
    super(ErrorMessagesEnum.UNAUTHENTICATED, details)
  }
}
