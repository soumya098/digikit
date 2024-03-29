'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from '@radix-ui/react-separator';
import { formatPrice } from '@/lib/utils';

const Cart = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const itemCount = 0;
	const fee = 10000;
	return (
		<Sheet>
			<SheetTrigger className='group -m-2 flex items-center p-2'>
				<ShoppingCart className='size-6 shrink-0 text-gray-400 group-hover:text-gray-500' area-hidden='true' />
				<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>{isMounted ? itemCount : 0}</span>
			</SheetTrigger>
			<SheetContent side={'right'} className='flex w-full flex-col pr-0 sm:max-w-lg'>
				<SheetHeader className='space-y-2.5 pr-6'>
					<SheetTitle>Cart ({itemCount})</SheetTitle>
				</SheetHeader>

				{itemCount > 0 ? (
					<>
						<div className='flex w-full flex-col pr-6'>
							<ScrollArea>{/* TODO: Cart Items  Logic */}</ScrollArea>
						</div>

						<div className='space-y-4 pr-6'>
							<Separator />
							<div className='space-y-1.5 text-sm'>
								<div className='flex'>
									<span className='flex-1'>Shipping</span>
									<span>Free</span>
								</div>
								<div className='flex'>
									<span className='flex-1'>Transaction Fee</span>
									<span>{formatPrice({ price: fee })}</span>
								</div>
								<div className='flex'>
									<span className='flex-1'>Total</span>
									<span>{formatPrice({ price: fee })}</span>
								</div>
							</div>

							<SheetFooter>
								<SheetTrigger asChild>
									<Link
										href='/cart'
										className={buttonVariants({
											className: 'w-full'
										})}>
										Continue to Checkout
									</Link>
								</SheetTrigger>
							</SheetFooter>
						</div>
					</>
				) : (
					<>
						<div className='flex h-full flex-col items-center justify-center space-y-1'>
							<div aria-hidden='true' className='relative mb-4 size-60 text-muted-foreground'>
								<Image src='/hippo-empty-cart.png' fill alt='empty shopping cart hippo' />
							</div>
							<div className='text-xl font-semibold'>Your cart is empty</div>
							<SheetTrigger asChild>
								<Link
									href='/products'
									className={buttonVariants({
										variant: 'link',
										size: 'sm',
										className: 'text-sm text-muted-foreground'
									})}>
									Add items to your cart to checkout
								</Link>
							</SheetTrigger>
						</div>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
