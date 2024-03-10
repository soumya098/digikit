import React from 'react';
import Wrapper from '../Wrapper';
import Link from 'next/link';
import { Icons } from '@/constants/icons';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { buttonVariants } from '../ui/button';
import Cart from '../Cart';
import { Separator } from '../ui/separator';

const Navbar = () => {
	const user = null;
	return (
		<nav className='sticky inset-x-0 top-0 z-50 h-16 bg-white'>
			<header className='relative bg-white'>
				<Wrapper className=''>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							<MobileNav />

							<div className='ml-4 flex lg:ml-0'>
								<Link href='/'>
									<Icons.logo className='size-10' />
								</Link>
							</div>

							<div className='z-50 max-sm:hidden sm:ml-4'>
								<NavItems />
							</div>

							<div className='ml-auto flex'>
								<div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between sm:space-x-6'>
									{user ? null : (
										<Link
											href='/sign-in'
											className={buttonVariants({
												variant: 'ghost'
											})}>
											Sign in
										</Link>
									)}

									{user ? null : <Separator orientation='vertical' />}

									{user ? null : (
										<Link
											href='/sign-up'
											className={buttonVariants({
												variant: 'ghost'
											})}>
											Create account
										</Link>
									)}

									{user ? <span className='h-6 w-px bg-gray-200' aria-hidden='true' /> : null}

									{user ? null : <Separator orientation='vertical' />}

									<div className='flow-root'>
										<Cart />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</header>
		</nav>
	);
};

export default Navbar;
