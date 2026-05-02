/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Session } from "./session.entity";

export interface ISessionRepository {
  create(userId: string): Promise<any>;
  find(): Promise<any>;
  findOneById(id: string): Promise<Session | null>;
  deleteOne(sessionId: string): Promise<any>;
  updateExpiration(session: Session): Promise<void>;
}
