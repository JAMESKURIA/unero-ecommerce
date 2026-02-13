export interface Product {
	id: number;
	images: string[];
	name: string;
	price: number;
	sale: boolean;
	stars: number;
	discount: number;
	colors: string[];
	inStock: number;
	sizes: string[];
	category: string;
}

export interface NewsItem {
	id: number;
	title: string;
	content: string;
	image?: string;
	date?: string;
	author?: string;
}

export interface CartItemType {
	product: Product;
	quantity: number;
	selectedColor?: string;
	selectedSize?: string;
}

export interface WishlistItemType {
	product: Product;
}
