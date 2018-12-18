/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productColor: string;
  productType: string;
  tags?: string[];
  availability: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
};