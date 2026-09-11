import {Button} from "@mantine/core";
import PencilSvg from "../../assets/PencilSVG.tsx";
import type {ButtonHTMLAttributes} from "react";

const EditButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <Button {...props}
                   mx={4}
                   size="xs">
        <PencilSvg/>
    </Button>
};

export default EditButton;