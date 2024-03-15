'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/constants/icons';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CredentialValidatorSchema, TCredentialValidatorSchema } from '@/lib/validators';
import { trpc } from '@/trpc/client';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger
	} = useForm<TCredentialValidatorSchema>({
		resolver: zodResolver(CredentialValidatorSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const onBlurHandler = async () => {
		await trigger('email');
	};

	const { data } = trpc.anyRoute.useQuery();
	console.log(data);

	const onSubmit = (values: TCredentialValidatorSchema) => {
		console.log(values);
		// TODO: send to server to save data
	};
	return (
		<>
			<div className='container relative flex flex-col items-center justify-center border-red-500 pt-20 lg:px-0'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<Icons.logo className='size-20' />
						<h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>

						<Link
							className={buttonVariants({
								variant: 'link',
								className: 'gap-1.5'
							})}
							href='/sign-in'>
							Already have an account? Sign-in
							<ArrowRight className='size-4' />
						</Link>
					</div>

					<div className='grid gap-6'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid gap-2'>
								<div className='grid gap-1 py-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										{...register('email')}
										className={cn({
											'focus-visible:ring-red-500': errors.email
										})}
										placeholder='you@example.com'
										onBlur={onBlurHandler}
									/>
									{errors?.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
								</div>

								<div className='grid gap-1 py-2'>
									<Label htmlFor='password'>Password</Label>
									<Input
										{...register('password')}
										className={cn({
											'focus-visible:ring-red-500': errors.password
										})}
										placeholder='you@example.com'
									/>
									{errors?.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
								</div>

								<Button>Sign up</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
