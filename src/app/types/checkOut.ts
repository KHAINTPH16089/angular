export type order = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    total: number,
    status: string,
    node: string
}
export type orderDetail = {
    _id: string,
    name: string,
    price: number,
    image: string,
    desc: string,
    quantity: number,
    order: string,
    value: number
}
export type updateOrder = {
    status?: string
}