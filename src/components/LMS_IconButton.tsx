import React from 'react';
import { Button } from '@mui/material';
import '../App.css'

type  IconProps = {

    icon: React.ReactNode,
    onClick: () => void,
    label: string,
    color:string
    className:string
}

function LMS_IconButton(props: IconProps) {
    const { icon, onClick, label, className } = props;

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="primary"
            startIcon={icon}
            className={className}
        >
            {label}
        </Button>
    );
}

export default LMS_IconButton;
