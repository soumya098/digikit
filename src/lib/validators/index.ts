import * as z from 'zod';

export const CredentialValidatorSchema = z.object({
	email: z.string().email({ message: 'Please enter an valid email' }),
	password: z.string().min(8, { message: 'Password must be at least 8 characters long.' })
});

export type TCredentialValidatorSchema = z.infer<typeof CredentialValidatorSchema>;
