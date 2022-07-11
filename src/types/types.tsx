export interface IProduct {
  name: string;
  price: string;
  coming_soon: boolean;
  image_url: string;
  sizes: Array<number>;
  colors: Array<string>;
  sold: boolean;
}

export interface IProducts {
  products: IProduct[];
}
