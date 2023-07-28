import { Product } from "./product.model"

export interface User{
    name: String,
    email: string,
    cart: {
        product : Product,
        quantity : number
    }[],
    address: {
        houseNo: string,
        building: string,
        state: string,
        pincode: number
    }[]
}