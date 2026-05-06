/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CreateRoleDto } from "../dto/create-role.dto";
import { FindRolesQueryDto } from "../dto/find-role.query.dto";
import { Role } from "./role.entity";

export interface IRoleRepository {
  create(data: CreateRoleDto): Promise<any>;
  find(query: FindRolesQueryDto): Promise<Role[]>;
  findOneById(id: string): Promise<any>;
  findOneByName(name: string): Promise<any>;
  deleteOne(id: string): Promise<any>;
}
