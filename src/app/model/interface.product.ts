export interface IProduct {
  designation: string,
  price: number,
  quantity: number,
  dimensions: string,
  category: ICategory
}

interface ICategory {
  name: string
}
