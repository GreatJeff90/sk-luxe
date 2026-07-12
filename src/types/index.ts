import { Product } from "@/data/products";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  selectedSize: string;
  selectedColor: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
}