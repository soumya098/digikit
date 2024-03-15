import { publicProcedure, router } from './trpc';

export const appRouter = router({
	anyRoute: publicProcedure.query(() => {
		return 'hi';
	})
});

export type AppRouter = typeof appRouter;
