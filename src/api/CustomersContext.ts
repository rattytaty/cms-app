import {type Customer} from "./api.ts";
import {createContext} from "react";

interface CustomersContextType {
    customers: Customer[]
    loading: boolean
    error: string
    setError: (value:string) => void
    createCustomer: (customer: Customer) => Promise<void>
    updateCustomer: (customerId: string, data: Customer) => Promise<void>
    deleteCustomer: (customerId: string) => Promise<void>
}

export const CustomersContext = createContext<CustomersContextType>({} as CustomersContextType)


