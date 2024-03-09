import Wrapper from '@/components/Wrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { PERKS } from '@/constants';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Wrapper className=''>
				<div className='mx-auto flex max-w-4xl flex-col items-center py-20 text-center'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
						Your marketplace for high-quality <span className='text-primary'>digital assets</span>.
					</h1>
					<p className='mt-6 max-w-prose text-lg text-muted-foreground'>
						Welcome to DigiKit. Every asset on our platform is verified by our team to ensure our highest quality standards.
					</p>

					<div className='mt-6 flex flex-col gap-4 sm:flex-row'>
						<Link href='/products' className={buttonVariants({ variant: 'default' })}>
							Browse Trending
						</Link>
						<Button variant='ghost'>Our quality promise &rarr;</Button>
					</div>
				</div>

				{/* TODO: List Products */}
			</Wrapper>

			<section className='border-t border-gray-200 bg-gray-100'>
				<Wrapper className='py-20'>
					<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
						{PERKS.map((perk) => (
							<div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
								<div className='flex justify-center md:shrink-0'>
									<div className='flex size-16 items-center justify-center rounded-full bg-background text-primary'>
										{<perk.Icon className='size-1/3' />}
									</div>
								</div>

								<div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
									<h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
									<p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
								</div>
							</div>
						))}
					</div>
				</Wrapper>
			</section>
		</>
	);
}
