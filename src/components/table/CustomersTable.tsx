import {type Customer} from "../../api/api.ts";
import {Table} from "@mantine/core";
import {formatDateFromNumber} from "../../helpers/formatDateFromNumber.ts";
import {useContext, useState} from "react";
import {CustomersContext} from "../../hooks/CustomersContext.ts";
import EditCustomerModal from "./EditCustomerModal.tsx";
import EditCustomerButton from "./EditCustomerButton.tsx";
import DeleteCustomerButton from "./DeleteCustomerButton.tsx";


const CustomersTable = ({customers}: { customers: Customer[] }) => {

    const rows = customers.map((customer) => (
        <Table.Tr>
            <Table.Td> {customer.name}</Table.Td>
            <Table.Td>{customer.address}</Table.Td>
            <Table.Td>{customer.email}</Table.Td>
            <Table.Td>{customer.phone}</Table.Td>
            <Table.Td>{customer.equipment}</Table.Td>
            <Table.Td>{customer.note}</Table.Td>
            <Table.Td>{customer.assignedTo}</Table.Td>
            <Table.Td>{formatDateFromNumber(customer.date)}</Table.Td>
            <Table.Td>
                <EditCustomerButton onClick={() => handleEdit(customer)}/>
                <DeleteCustomerButton onClick={() => deleteCustomer(customer.id)}/>
            </Table.Td>
        </Table.Tr>
    ));

    const {deleteCustomer} = useContext(CustomersContext);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
    const handleEdit = (customer: Customer) => {
        setEditingCustomer(customer);
    };
    const closeEditModal = () => {
        setEditingCustomer(null);
    };

    return (<>
        <Table.ScrollContainer minWidth={700}>
            <Table highlightOnHover
                   withTableBorder>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Address</Table.Th>
                        <Table.Th>Email</Table.Th>
                        <Table.Th>Phone</Table.Th>
                        <Table.Th>Equipment</Table.Th>
                        <Table.Th>Note</Table.Th>
                        <Table.Th>Assigned to</Table.Th>
                        <Table.Th>Installation date</Table.Th>

                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
        <EditCustomerModal customer={editingCustomer}
                           onClose={closeEditModal}/>
    </>);
};

export default CustomersTable;


