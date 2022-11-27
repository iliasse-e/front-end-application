export interface Product {
    id: string,
    name: string,
    price: number,
    promotion: boolean
}

export interface PageProduct {
    products: Product[],
    pagination : Pagination
}

export interface Pagination {
    currentPage: number,
    size: number,
    totalPages: number
}
