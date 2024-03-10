export interface PriceFormatProps {
	price: number | string;
	options?: {
		currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'INR';
		notation?: Intl.NumberFormatOptions['notation'];
	};
}
