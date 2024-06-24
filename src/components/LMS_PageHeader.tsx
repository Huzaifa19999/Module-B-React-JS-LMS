
type  PHProps = {
  title: string;
  subtitle?: string;
  className:string
}

function LMS_PageHeader (props:PHProps) {

    const { title, subtitle, className } = props

  return (

    <div className={className}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
    
  );
};

export default LMS_PageHeader;
