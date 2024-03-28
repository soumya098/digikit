import { publicProcedure, router } from './setup';
import { getPayloadClient } from '../config/payloadClient';
import { CredentialValidatorSchema } from '../lib/validators';
import { TRPCError } from '@trpc/server';

export const authRouter = router({
	createNewUser: publicProcedure.input(CredentialValidatorSchema).mutation(async ({ input }) => {
		const { email, password } = input;
		const payload = await getPayloadClient();

		// check if user is already present
		const { docs: users } = await payload.find({
			collection: 'users',
			where: {
				email: {
					equals: email
				}
			}
		});

		if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' });

		await payload.create({
			collection: 'users',
			data: {
				email,
				password,
				role: 'user'
			}
		});

		return { success: true, sentToEmail: email };
	})
});
