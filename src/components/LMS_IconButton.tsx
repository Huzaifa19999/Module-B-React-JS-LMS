import React from 'react';
import { Button } from '@mui/material';
import '../App.css'

interface IconProps {

    icon: React.ReactNode,
    onClick: () => void,
    label: string,
    color:string
}

function LMS_IconButton(props: IconProps) {
    const { icon, onClick, label } = props;

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="primary"
            startIcon={icon}
        >
            {label}
        </Button>
    );
}

export default LMS_IconButton;
