export const Permissions = {
  ADD_ARTICLE: "ADD_ARTICLE",
  EDIT_ARTICLE: "EDIT_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",

  ADD_PRODUCT: "ADD_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",

  ACCESS_ADMIN_PANEL: "ACCESS_ADMIN_PANEL",
} as const;

export type PermissionType = (typeof Permissions)[keyof typeof Permissions];
