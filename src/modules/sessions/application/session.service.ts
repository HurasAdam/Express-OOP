/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { ISessionRepository } from "../domain/session.repository.interface";

export class SessionService {
  private repository;
  constructor(repository: ISessionRepository) {
    this.repository = repository;
  }

  async find() {
    return await this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneById(id);
  }

  async deleteOne(sessionId: string) {
    await this.repository.deleteOne(sessionId);
  }
}
