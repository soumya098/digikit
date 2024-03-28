import { authRouter } from './auth-router';
import { publicProcedure, router } from './setup';

export const appRouter = router({
	auth: authRouter
});

export type AppRouter = typeof appRouter;
