import { Permissions, PermissionType } from "./permissions";
import { RoleType } from "./roles";

export const RolePermissionsMap: Record<RoleType, PermissionType[]> = {
  ADMIN: Object.values(Permissions),

  MODERATOR: [
    // PRODUCTS
    Permissions.ADD_PRODUCT,
    Permissions.EDIT_PRODUCT,
    Permissions.DELETE_PRODUCT,

    // ARTICLES
    Permissions.ADD_ARTICLE,
    Permissions.EDIT_ARTICLE,
    Permissions.DELETE_ARTICLE,
  ],

  EDYTOR: [Permissions.ADD_ARTICLE, Permissions.EDIT_ARTICLE],

  AUTOR: [Permissions.ADD_ARTICLE],

  CZYTELNIK: [],
};
