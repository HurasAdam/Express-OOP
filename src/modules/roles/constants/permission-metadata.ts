// infrastructure/constants/permission-metadata.ts

import { Permissions } from "./permissions";

export const PERMISSIONS_METADATA = [
  {
    key: Permissions.ACCESS_ADMIN_PANEL,
    label: "Dostęp do panelu administracyjnego",
    category: "Panel administracyjny",
    description: "Dostęp do panelu administracyjnego",
  },
  {
    key: Permissions.ADD_ARTICLE,
    label: "Dodawanie artykułów",
    category: "Artykuły",
    description: "Tworzenie nowych artykułów",
  },
  // ...
];
