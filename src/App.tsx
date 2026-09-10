import './App.css'
import {useEffect, useState} from "react";
import {type Customer, customersApi} from "./api/api.ts";
import Table from "./components/table/Table.tsx";

function App() {

    const [selectedLimit, setSelectedLimit] = useState<number>(10)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [customers, setCustomers] = useState<Customer[]>([])



    /*useEffect(() => {

            setIsLoading(true)
            api.fetchPizzas(currentPage, selectedLimit).then(response => {
                setProducts(response)
                setIsLoading(false)
            })
        }, [selectedLimit, currentPage])*/

    useEffect(() => {
        customersApi.getCustomers().then(response => {
            setCustomers(response.data)
        })
    }, []);



    return <div className="app">


        <Table customers={customers}/>


    </div>
}

export default App
