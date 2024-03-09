'use client';
import { PRODUCT_CATEGORIES } from '@/constants';
import React, { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	useEffect(() => {
		const escapeHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActiveIndex(null);
			}
		};

		document.addEventListener('keydown', escapeHandler);

		return () => {
			document.removeEventListener('keydown', escapeHandler);
		};
	}, []);

	const navRef = useRef<HTMLDivElement | null>(null);
	const isAnyOpen = activeIndex !== null;

	useOnClickOutside(navRef, () => setActiveIndex(null));

	return (
		<div className='flex h-full gap-4' ref={navRef}>
			{PRODUCT_CATEGORIES.map((category, i) => {
				const handleOpen = () => {
					if (activeIndex === i) {
						setActiveIndex(null);
					} else {
						setActiveIndex(i);
					}
				};

				const isOpen = i === activeIndex;
				return <NavItem key={category.value} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} />;
			})}
		</div>
	);
};

export default NavItems;
