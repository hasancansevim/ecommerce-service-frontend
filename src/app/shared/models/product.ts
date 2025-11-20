export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  base_price: number;
  discount: number;
  image_url: string;
  meta_description: string;
  stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  category_id: number;
  store_id: number;
  created_at: Date;
  updated_at: Date;
}
