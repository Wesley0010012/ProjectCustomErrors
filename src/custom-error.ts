import { ErrorStatusEnum } from './enums/error-status-enum'

export abstract class CustomError extends Error {
  private readonly _timestamp: Date
  private readonly _origin: string

  public constructor(
    message: string,
    private readonly _status?: ErrorStatusEnum,
    private readonly _details?: string
  ) {
    super(message)
    this.name = this.constructor.name
    this._origin = CustomError.getOrigin()
    this._timestamp = new Date()
  }

  public get timestamp(): Date {
    return this._timestamp
  }

  public get origin(): string {
    return this._origin
  }

  public get details(): string | null {
    return this._details
  }

  public status(): ErrorStatusEnum | null {
    return this._status
  }

  private static getOrigin() {
    const stackLines = new Error().stack?.split('\n') || []
    const callerLine = stackLines[2] || ''
    const match = callerLine.match(/\((.*):(\d+):(\d+)\)/)
    if (match) {
      return `${match[1]}:${match[2]}`
    }
    return 'Unknown'
  }
}
