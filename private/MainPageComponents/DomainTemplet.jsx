import '@/stylingComponent/domain.css'

const DomainTemplet = (props) => {
  console.log("Received props:", props);  // Debugging line
  return (
    <div>
        <div className="domainTempletWrapper">
        <div style={{ backgroundColor: props.background }} className="domainTempletImageContainer">
            <img src={props.img} className="domainTempleteImage" alt={props.heading} />
          </div>
          <div className="domainTempletContentContainer">
            <h3 className="domainTempletHeading">{props.heading}</h3>
            <p className="domainTempletInformation">{props.information}</p>
          </div>
        </div>
        <div className="domainTempletEmptyContainer"></div>
    </div>
  )
}
  
export default DomainTemplet;