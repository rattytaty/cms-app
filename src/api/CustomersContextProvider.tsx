import {type FC, type ReactNode, useEffect, useState} from "react";
import {type Customer, customersApi} from "./api.ts";
import {CustomersContext} from "./CustomersContext.ts";

const CustomersContextProvider: FC<{ children: ReactNode }> = ({children}) => {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const getCustomers = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await customersApi.getCustomers();
                setCustomers(response.data);
            } catch {
                setError("Failed to load customers");
            } finally {
                setLoading(false);
            }
        };

        getCustomers();
    }, []);
    const createCustomer = async (customer: Customer) => {
        try {
            const response = await customersApi.createCustomer(customer);

            setCustomers(prev => [...prev, response.data]);
        } catch {
            setError("Failed to create customer");
        }
    };

    const updateCustomer = async (
        customerId: string,
        data: Customer
    ) => {
        try {
            const response = await customersApi.updateCustomer(
                customerId,
                data
            );

            setCustomers(prev =>
                prev.map(customer =>
                    customer.id === customerId
                        ? response.data
                        : customer
                )
            );
        } catch {
            setError("Failed to update customer");
        }
    };

    const deleteCustomer = async (customerId: string) => {
        try {
            await customersApi.deleteCustomer(customerId);

            setCustomers(prev=>
                prev.filter(customer => customer.id !== customerId)
            );
        } catch {
            setError("Failed to delete customer");
        }
    };


    return <CustomersContext.Provider value={{
        customers, error, loading, setError, deleteCustomer, updateCustomer,  createCustomer
    }}>
        {children}
    </CustomersContext.Provider>
};
export default CustomersContextProvider;