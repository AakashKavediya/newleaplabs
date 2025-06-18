
import DomainTemplet from "./DomainTemplet"
import '@/stylingComponent/domain.css'
const ScreenTwo = () => {
  return (
    <div className="domainkeeper" >
        <h2 className="DomainNameHeading" >DOMAINS</h2>
        <div className="DomainContentContainer">
        <DomainTemplet background="#1f1f1f" img="/images/Embedded.png" heading="Embedded" information="Embedded domain involves designing computer systems for specific functions, integrating hardware and software for efficiency." />
        <DomainTemplet background="#4eaff5" img="/images/softwareDomain.png" heading="Software Development" information="Software domain involves designing, developing, and maintaining applications and systems for diverse purposes." />
        <DomainTemplet background="#2f2f2f" img="/images/threeDmodel.png" heading="3D Structure" information="This domain involves creatively designing structures. It contains simulation and testing of structures that can sustain extreme temperatures and mechanical pressure." />
        <DomainTemplet background="#e39c19" img="/images/AidsDomain.png" heading="AI/DS" information="Data science involves extracting insights from data using statistical, mathematical, and computational techniques for informed decision-making." />
        <DomainTemplet background="#636363" img="/images/pcb.png" heading="PCB" information="PCB design involves creating circuit layouts on boards for electronic devices, optimizing connectivity and functionality." />
        <DomainTemplet background="#636363" img="/images/radio.png" heading="Radio Frequency" information="Radio frequency domain involves electromagnetic waves for wireless communication, spanning from 3 kHz to 300 GHz." />
    </div>
    </div>
  )
}

export default ScreenTwo;

// const styles = StyleSheet.create({})