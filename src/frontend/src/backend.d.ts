import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    name: string;
    address: string;
    phone: string;
}
export interface OrderInput {
    name: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getTotalOrderCount(): Promise<bigint>;
    submitOrder(input: OrderInput): Promise<bigint>;
}
