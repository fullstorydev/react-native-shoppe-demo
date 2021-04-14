export type Product = {
  title: string,
  description: string,
  price: number,
  image: string, // file name of the image
  unit: string
}

// item is an product but that's in cart
export type Item = Product & {
  quantity: number
}