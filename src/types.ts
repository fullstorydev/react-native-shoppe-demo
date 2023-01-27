export type Product = {
  title: string;
  description: string;
  price: number;
  image: string; // file name of the image
  unit: string;
};

// item is a product but is in cart
export type Item = Product & {
  quantity: number;
};
