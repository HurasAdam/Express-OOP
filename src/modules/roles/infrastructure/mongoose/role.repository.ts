import { Model } from "mongoose";
import { Role } from "../../domain/role.entity";
import { IRoleRepository } from "../../domain/role.repository.interface";
import { FindRolesQueryDto } from "../../dto/find-role.query.dto";
import { RoleDocument } from "./role.model";

export class RoleRepository implements IRoleRepository {
  private model;
  constructor(model: Model<RoleDocument>) {
    this.model = model;
  }

  toDomain(doc: RoleDocument): Role {
    return new Role(
      doc._id.toString(),
      doc.name,
      doc.permissions,
      doc.iconKey,
      doc.labelColor,
    );
  }

  async create(data: any): Promise<Role> {
    const doc = await this.model.create(data);
    return this.toDomain(doc);
  }
  async find(filters: FindRolesQueryDto): Promise<Role[]> {
    const query: any = {};

    if (filters?.name) {
      query.name = { $regex: filters.name, $options: "i" };
    }

    const docs = await this.model.find(query);
    return docs.map((doc) => this.toDomain(doc));
  }

  findOneById(id: string): Promise<any> {
    return this.model.findById(id);
  }

  async findOneByName(name: string): Promise<Role | null> {
    const doc = await this.model.findOne({ name });

    if (!doc) return null;

    return this.toDomain(doc);
  }

  deleteOne(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
