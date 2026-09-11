import {Button} from "@mantine/core";
import type {ButtonHTMLAttributes} from "react";
import DeleteSVG from "../../assets/DeleteSVG.tsx";

const EditButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <Button {...props}
                   mx={4}
                   color="red"
                   size="xs">
        <DeleteSVG/>
    </Button>

};

export default EditButton;