import {createRoot} from 'react-dom/client'

import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import {mantineTheme} from "./mantineConfig/config.ts";
import '@mantine/core/styles.css';
import CustomersContextProvider from "./hooks/CustomersContextProvider.tsx";


createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={mantineTheme}>
        <CustomersContextProvider>
            <App/>
        </CustomersContextProvider>
    </MantineProvider>
)
