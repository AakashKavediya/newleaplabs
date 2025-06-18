import Template from "./template";

const Founders = () => {
    return(
        <div className="TemplateTeamContainer" >
            
            <h2 className="Templateheading" >FOUNDERS</h2>
            <div className="TemplateTemplateContainer" >
            <Template pic='https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg' userName="User Name" userPosition="Software" positionName="-" branchName="EXTC" contribution="none" />
            <Template pic='https://i.pinimg.com/736x/61/31/4d/61314d055f92ca874a0f1b50d517ee28.jpg' userName="User Name" userPosition="Software" positionName="-" branchName="EXTC" contribution="none" />
            </div>
            
            <h2 className="Templateheading">MENTORS</h2>
            <div className="TemplateTemplateContainer">
            <Template pic='https://i.pinimg.com/736x/e9/3a/09/e93a0996a2d838b7a5dac7eada0117f5.jpg' userName="User Name" userPosition="Software" positionName="-" branchName="EXTC" contribution="none" />
            <Template pic='https://i.pinimg.com/736x/f3/5d/12/f35d121e8d8d8b96b23f9b5b8829e4e0.jpg' userName="User Name" userPosition="Software" positionName="-" branchName="EXTC" contribution="none" />
            <Template pic='https://i.pinimg.com/736x/66/4b/b2/664bb216052a3ab7bddd758f0c44a207.jpg' userName="User Name" userPosition="Software" positionName="-" branchName="EXTC" contribution="none" />
            </div>
            </div>
    )
}
export default Founders;