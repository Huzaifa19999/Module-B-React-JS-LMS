type chkProps = {
    
    label:string,
    checked:boolean,
    onChange:(checked:boolean) => void
}

function LMS_CheckBox(props:chkProps) {

    const { label, checked, onChange } = props

    const clickChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        onChange(event.target.checked)
    }

  return (
    <>
    <label>
        <input type="checkbox"
                checked={checked}
                onChange={clickChange} />
                {label}
    </label>
    </>
  )
}

export default LMS_CheckBox