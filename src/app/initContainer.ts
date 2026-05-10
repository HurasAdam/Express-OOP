/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { AuthMiddleware } from "../middleware/authGuard";
import { createAdminModule } from "../modules/admin/admin.module";
import { createArticleModule } from "../modules/articles/article.module";
import { createAuthModule } from "../modules/auth/auth.module";
import { createProductCategoryModule } from "../modules/product-categories/product-category.module";
import { createProductModule } from "../modules/products/product.module";
import { createRoleModule } from "../modules/roles/role.module";
import { createSessionModule } from "../modules/sessions/session.module";
import { createTagModule } from "../modules/tags/tag.module";
import { createUserModule } from "../modules/users/user.module";

export function initContainer() {
  const userModule = createUserModule();
  const sessionModule = createSessionModule();
  const articleModule = createArticleModule();
  const productModule = createProductModule();
  const roleModule = createRoleModule();
  const productCategoryModule = createProductCategoryModule({
    productRepository: productModule.repository,
  });
  const authModule = createAuthModule({
    userRepository: userModule.repository,
    sessionRepository: sessionModule.repository,
  });

  const tagModule = createTagModule({
    articleRepository: articleModule.repository,
    userRepository: userModule.repository,
  });

  const adminModule = createAdminModule({
    userRepository: userModule.repository,
    roleRepository: roleModule.repository,
  });

  const authMiddleware = new AuthMiddleware(
    userModule.repository,
    sessionModule.repository,
  );

  return {
    auth: authModule,
    authGuard: authMiddleware,
    admin: adminModule,
    user: userModule,
    session: sessionModule,
    role: roleModule,
    tag: tagModule,
    article: articleModule,
    product: productModule,
    productCategory: productCategoryModule,
  };
}

export type Container = ReturnType<typeof initContainer>;
