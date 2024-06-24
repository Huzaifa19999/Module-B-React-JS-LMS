import { TextField } from "@mui/material"

type InpProps = {

    label:string,
    onChange:() => void,
    value:string,
    type?:string,
    disabled?:boolean,
    required?:boolean,
    fullWidth?:boolean,
    margin?:string,
}



function LMS_Input(props:InpProps) {

    const { label, onChange, value, type, disabled, required, fullWidth, margin } = props 

  return (
    <>
        <label>
            <TextField 
                   type={type}
                   label={label}
                   sx={{margin: {margin}}}
                   onChange={onChange}
                   value={value}
                   disabled={disabled}
                   required={required}
                   style={{width : fullWidth ? '100%' : 'auto' }}
                   variant="standard"/>
        </label>
    </>
  )
}

export default LMS_Input