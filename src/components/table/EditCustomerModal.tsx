import type {Customer} from "../../api/api.ts";
import {useContext} from "react";
import {CustomersContext} from "../../hooks/CustomersContext.ts";
import CustomerForm, {type CustomerFormValues} from "../CustomerForm/CustomerForm.tsx";
import {Modal} from "@mantine/core";

interface EditCustomerModalProps {
    customer: Customer | null;
    onClose: () => void;
}

const EditCustomerModal = ({customer, onClose}: EditCustomerModalProps) => {
    const {updateCustomer} = useContext(CustomersContext);

    const handleSubmit = async (values: CustomerFormValues) => {
        if (!customer) return;
        const [year, month, day] = values.date.split("-").map(Number);
        const timestamp = Math.floor(new Date(year, month - 1, day).getTime() / 1000);
        await updateCustomer(customer.id, {...values, date: timestamp, id: customer.id,});
        onClose();
    };
    return (<Modal opened={customer !== null}
                   onClose={onClose}
                   title="Edit Customer"> {customer && (
        <CustomerForm initialValues={{...customer, date: new Date(customer.date * 1000).toISOString().split("T")[0],}}
                      onSubmit={handleSubmit}
                      onCancel={onClose}/>)} </Modal>);
};
export default EditCustomerModal;