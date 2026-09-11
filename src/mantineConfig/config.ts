import {createTheme, type MantineColorsTuple} from "@mantine/core";

const myColor: MantineColorsTuple = [
    '#f2f4fb',
    '#e5e6ea',
    '#c9cad0',
    '#abadb6',
    '#9194a0',
    '#818493',
    '#787d8e',
    '#666b7c',
    '#5e6375',
    '#4b5165'
];

export const mantineTheme = createTheme({
    colors: {
        myColor,
    },
    primaryColor: 'myColor',
});