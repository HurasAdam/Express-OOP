import { lessThanOneDay, thirtyDaysFromNow } from "../../../utils/date";

export class Session {
  constructor(
    public readonly id: string,
    public readonly userId: string,

    public readonly createdAt: Date,
    private expiresAt: Date,
  ) {}

  get expires_At() {
    return this.expiresAt;
  }

  isExpired(): boolean {
    return this.expiresAt.getTime() < Date.now();
  }

  isActive(): boolean {
    return this.expiresAt.getTime() > Date.now();
  }

  willExpireSoon(): boolean {
    return lessThanOneDay(this.expiresAt);
  }

  extendExpirationTime(): void {
    this.expiresAt = thirtyDaysFromNow();
  }
}
