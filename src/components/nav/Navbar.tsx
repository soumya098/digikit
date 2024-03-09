import React from 'react';
import Wrapper from '../Wrapper';
import Link from 'next/link';
import { Icons } from '@/constants/icons';
import MobileNav from './MobileNav';
import NavItems from './NavItems';

const Navbar = () => {
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

							<div className='z-50 max-sm:hidden sm:ml-8 '>
								<NavItems />
							</div>
						</div>
					</div>
				</Wrapper>
			</header>
		</nav>
	);
};

export default Navbar;
