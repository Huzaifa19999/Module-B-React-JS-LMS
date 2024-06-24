type btnProps = {

    label:string,
    className:string,
    onClick:()=>void,
    disabled?:boolean
}

function LMS_Button(props:btnProps) {

const { label, className, disabled, onClick } = props

  return (
    <>
    <button 
            className={className} 
            disabled={disabled} 
            onClick={onClick} >
            {label}

    </button>
    </>
  )
}

export default LMS_Button