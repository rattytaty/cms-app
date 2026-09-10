import {useContext} from "react";
import {CustomersContext} from "./CustomersContext.ts";

export function useCustomers() {

    const {customers, error, loading, setError, deleteCustomer, updateCustomer,  createCustomer} = useContext(CustomersContext)
    const clearError = () => setError("")




    return {customers, error, loading, clearError, deleteCustomer, updateCustomer,  createCustomer}
}