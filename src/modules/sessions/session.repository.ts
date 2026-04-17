export class SessionRepository {
  private model;
  constructor(model: any) {
    this.model = model;
  }

  async create(userId: string) {
    return this.model.create({ userId });
  }

  find() {
    return this.model.find();
  }
  deleteOne(sessionId: string) {
    return this.model.findByIdAndDelete(sessionId);
  }
}
