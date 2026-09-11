import {type Customer, type CustomerTypeForCreation} from "../api/api.ts";
import {createContext} from "react";

interface CustomersContextType {
    customers: Customer[]
    loading: boolean
    error: string
    clearError: () => void
    createCustomer: (customer: CustomerTypeForCreation) => Promise<void>
    updateCustomer: (customerId: string, data: Customer) => Promise<void>
    deleteCustomer: (customerId: string) => Promise<void>
}

export const CustomersContext = createContext<CustomersContextType>({} as CustomersContextType)


