import type {CustomerFormValues} from "../components/CustomerForm/CustomerForm.tsx";
import {useForm} from "@mantine/form";


const defaultValues: CustomerFormValues = {
    name: "",
    address: "",
    email: "",
    phone: "",
    note: "",
    assignedTo: "",
    date: "",
    equipment: "",
};


export const useCustomerForm = (
    initialValues: CustomerFormValues = defaultValues,
    onSubmit: (values: CustomerFormValues) => void | Promise<void>
) => {

    const form = useForm<CustomerFormValues>({
        mode: "uncontrolled",
        initialValues,

        validate: {
            name: (value) =>
                value.trim()
                    ? null
                    : "Customer's name is required",

            address: (value) =>
                value.trim()
                    ? null
                    : "Customer's address is required",

            email: (value) =>
                /^\S+@\S+$/.test(value)
                    ? null
                    : "Invalid email",

            phone: (value) =>
                value
                    ? null
                    : "Customer's phone is required",

            equipment: (value) =>
                value.trim()
                    ? null
                    : "Equipment type is required",

            assignedTo: (value) =>
                value
                    ? null
                    : "Please select an employee",

            date: (value) =>
                value
                    ? null
                    : "Installation date is required",
        },
    });

    const handleSubmit = async (
        values: CustomerFormValues
    ) => {
        await onSubmit(values);
        form.reset();
    };

    return {
        form,
        handleSubmit,
    };
};