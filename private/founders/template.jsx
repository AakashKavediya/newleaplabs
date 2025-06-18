import '@/stylingComponent/founders.css'
const Template = (props) => {
    return(
        <div>
            <div className="TemplateboxWrapper" >
                <div className='TemplateuserContent' >
                    <div className='Templateuser' >
                        <img src={props.pic} className='TemplateuserPic' />
                        <h3 className='TemplateuserName' >{props.userName}</h3>
                    </div>
                </div>
                {/* <div className='informaionContainer' >
                    <div className='DeptContainer' >
                        <p className='position' >Position</p>
                        <p className='positionName' >{props.positionName}</p>
                    </div>
                    <div className='BranchContainer' >
                        <p className='branch' >Branch</p>
                        <p className='branchName' >{props.branchName}</p>
                    </div>
                </div>
                <div>
                    <h5 className='contributionHeading' >Contribution</h5>
                    <p className='contribution' >{props.contribution}</p>
                </div> */}
            </div>
        </div>
    )

}

export default Template;