
export type Product = {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: string,
    desc: string,
    status: number,
    public_id: any
}
export type createProduct = {
    name?: string,
    price?: number,
    status?: number
}
export type ProductCart = {
    _id: string,
    name: string,
    price: number,
    value: number,
    image: string,
    desc: string,
}
export type Count ={
    Count: number
}