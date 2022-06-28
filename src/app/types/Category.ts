export type Category = {
    _id?: string | undefined,
    name?: string,
    status?: number
}
export type CategoryProduct = {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: string,
    desc: string,
    status: number,
    public_id: any
}
export type status = {
    _id: string,
    name: string
}
