import "../../App.css";
import {type Customer, customersApi} from "../../api/api.ts";


const Table = ({customers}: { customers: Customer[] }) => {

    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-IE", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const handleAction = (customer: Customer) => {
        console.log("Selected customer:", customer);
    };

    const tableHead = () => <thead>
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

    const editCustomer=()=>{

    }
    const deleteCustomer=(customerId:string)=>{
        customersApi.deleteCustomer(customerId)
    }
    return <div className="tableWrapper">
        <table className="customersTable">
            {tableHead()}
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
                            E
                        </button>
                        <button
                            className="customer-action"
                            onClick={() => deleteCustomer(customer.id)}
                            aria-label={`Actions for ${customer.name}`}>
                            D
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
};

export default Table;