import axios from "axios";

export const instance = axios.create({
    baseURL: "https://6aa046473e0d88d3d7e5859f.mockapi.io/cms/customers",
    headers: {'content-type': 'application/json'},
})

export type Customer = {
    name: string,
    address: string,
    email: string,
    phone: string,
    note: string,
    assignedTo: string,
    date: number,
    equipment: string,
    id: string
}

export const customersApi = {
    getCustomers() {
        return instance.get<Customer[]>("")
    },
    createCustomer(customer:Customer) {
        return instance.post<Customer>("/", customer)
    },
    deleteCustomer(customerId: string) {
        return instance.delete<Customer>(`/${customerId}`)
    },
    updateCustomer(customerId: string, data: Customer) {
        return instance.put(`/${customerId}`, data)
    },
}