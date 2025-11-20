export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  basePrice: number;
  discount: number;
  imageUrl: string;
  metaDescription: string;
  stockQuantity: number;
  isActive: boolean;
  isFeatured: boolean;
  categoryId: number;
  storeId: number;
  createdAt: Date;
  updatedAt: Date;
}
