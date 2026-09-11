import {Button, Group, NumberInput, Textarea, TextInput,} from "@mantine/core";
import {DatePickerInput} from "@mantine/dates";
import {useCustomerForm} from "../../hooks/useCustomerForm.ts";

export type CustomerFormValues = {
    name: string;
    address: string;
    email: string;
    phone: string;
    note: string;
    assignedTo: string;
    date: string;
    equipment: string;
};

interface CustomerFormProps {
    initialValues?: CustomerFormValues;
    onSubmit: (values: CustomerFormValues) => void | Promise<void>;
    onCancel: () => void;
}

const CustomerForm = ({
                          initialValues,
                          onSubmit,
                          onCancel,
                      }: CustomerFormProps) => {

    const {form, handleSubmit} = useCustomerForm(
        initialValues,
        onSubmit
    );

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput required
                       label="Customer's name:"
                       {...form.getInputProps("name")}/>
            <TextInput required
                       label="Customer's address:"
                       {...form.getInputProps("address")}/>
            <TextInput required
                       label="Customer's email:"
                       {...form.getInputProps("email")}/>
            <NumberInput required
                         allowNegative={false}
                         label="Customer's phone:"
                         {...form.getInputProps("phone")}/>
            <TextInput required
                       label="Equipment type"
                       {...form.getInputProps("equipment")}/>
            <Textarea label="Note"
                      {...form.getInputProps("note")}/>
            <TextInput label="Assigned to"
                       {...form.getInputProps("assignedTo")}/>

            <DatePickerInput minDate={new Date()}
                             label="Installation date:"
                             placeholder="Pick date"
                             {...form.getInputProps("date")}/>
            <Group mt={10}>
                <Button type="submit">Save</Button>
                <Button type="button"
                        variant="subtle"
                        onClick={onCancel}>Cancel</Button>
            </Group>

        </form>
    );
};

export default CustomerForm;