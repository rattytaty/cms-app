import {Button, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {useContext} from "react";
import '@mantine/dates/styles.css';
import {CustomersContext} from "../../hooks/CustomersContext.ts";
import CustomerForm, {type CustomerFormValues} from "../CustomerForm/CustomerForm.tsx";

const CreateCustomer = () => {

    const [addCustomerModalOpened, {open, close}] = useDisclosure(false);

    const {createCustomer} = useContext(CustomersContext)

    const handleCreateCustomer = async (values: CustomerFormValues) => {
        const [year, month, day] = values.date.split("-").map(Number);
        const timestamp = Math.floor(new Date(year, month - 1, day).getTime() / 1000);
        await createCustomer({...values, date: timestamp,});
        close();
    };

    return <div>
        <Button onClick={open} size="sm">Add Customer</Button>
        <Modal opened={addCustomerModalOpened}
               onClose={close}
               title="Add a new Customer">
            <CustomerForm onSubmit={handleCreateCustomer}
                          onCancel={close}/> </Modal>
    </div>
};

export default CreateCustomer;