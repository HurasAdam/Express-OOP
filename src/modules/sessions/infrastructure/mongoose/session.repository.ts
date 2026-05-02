/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Model } from "mongoose";
import { Session } from "../../domain/session.entity";
import { ISessionRepository } from "../../domain/session.repository.interface";
import { SessionDocument } from "../session.model";

export class SessionRepository implements ISessionRepository {
  private model;
  constructor(model: Model<SessionDocument>) {
    this.model = model;
  }

  private toDomain(doc: SessionDocument): Session {
    return new Session(
      doc._id.toString(),
      doc.userId.toString(),
      doc.createdAt,
      doc.expiresAt,
    );
  }

  async create(userId: string) {
    return this.model.create({ userId });
  }

  find() {
    return this.model.find();
  }

  async findOneById(sessionId: string) {
    const doc = await this.model.findById(sessionId);
    if (!doc) return null;
    return this.toDomain(doc);
  }

  deleteOne(sessionId: string) {
    return this.model.findByIdAndDelete(sessionId);
  }

  async updateExpiration(session: Session): Promise<void> {
    await this.model.findByIdAndUpdate(session.id, {
      expiresAt: session.expires_At,
    });
  }
}
