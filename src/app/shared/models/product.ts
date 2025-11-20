export interface Product {
  id: number;
  name: string;
  slug: string;
  isActive: boolean;
  price: number;
  discount: number;
  imageUrl: string;
  stockQuantity: number;
  basePrice: number;
}
