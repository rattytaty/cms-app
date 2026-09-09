import './App.css'
import {useEffect, useState} from "react";
import {type Customer, customersApi} from "./api/api.ts";
import Table from "./components/table/Table.tsx";

function App() {

    const [selectedLimit, setSelectedLimit] = useState<number>(10)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [customers, setCustomers] = useState<Customer[]>([])

    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-IE", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };



    useEffect(() => {
        customersApi.getCustomers().then(response => {
            setCustomers(response.data)
        })
    }, []);

    return <div className="app">
        <div className="tableWrapper">
            <table className="customersTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Equipment</th>
                    <th>Note</th>
                    <th>Assigned to</th>
                    <th>Created date</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.equipment}</td>
                        <td>
                            <span className="customer-note">{customer.note}</span>
                        </td>
                        <td>{customer.assignedTo}</td>
                        <td>{formatDate(customer.date)}</td>
                        <td className="customer-action-cell">
                            <button
                                className="customer-action"
                                onClick={() => handleAction(customer)}
                                aria-label={`Actions for ${customer.name}`}>
                                ☰
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <Table/>


    </div>
}

export default App
