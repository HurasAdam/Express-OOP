import { AuthMiddleware } from "../middleware/authGuard";
import { createAuthModule } from "../modules/auth/auth.module";
import { createSessionModule } from "../modules/sessions/session.module";
import { createUserModule } from "../modules/users/user.module";

export function initContainer() {
  const userModule = createUserModule();
  const sessionModule = createSessionModule();
  const authModule = createAuthModule({
    userRepository: userModule.repository,
    sessionRepository: sessionModule.repository,
  });

  const authMiddleware = new AuthMiddleware(
    userModule.repository,
    sessionModule.repository,
  );

  return {
    user: userModule,
    session: sessionModule,
    auth: authModule,
    authGuard: authMiddleware,
  };
}

export type Container = ReturnType<typeof initContainer>;
