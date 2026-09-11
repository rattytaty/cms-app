import {useContext} from "react";
import CustomersTable from "./components/table/CustomersTable.tsx";
import {CustomersContext} from "./hooks/CustomersContext.ts";
import CreateCustomer from "./components/table/CreateCustomer.tsx";
import {Stack} from "@mantine/core";

function App() {

    const {customers} = useContext(CustomersContext)

    return <Stack m={20} gap="md">
        <CreateCustomer/>
        <CustomersTable customers={customers}></CustomersTable>
    </Stack>
}

export default App
