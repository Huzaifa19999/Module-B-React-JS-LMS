type btnProps = {

    label:string,
    className:string,
    onClick:(e:any)=>void,
    disabled?:boolean,
    type:any
}

function LMS_Button(props:btnProps) {

const { label, className, disabled, onClick, type } = props

  return (
    <>
    <button 
            className={className} 
            disabled={disabled} 
            onClick={onClick}
            type={type} >
            {label}
            

    </button>
    </>
  )
}

export default LMS_Button