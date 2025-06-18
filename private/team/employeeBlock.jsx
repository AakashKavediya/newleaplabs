import '@/stylingComponent/teams.css'
const EmployeeBlock = (props) => {
    return(
        <div>
            <div className="boxWrapper" >
                <div className='userContent' >
                    <div className='user' >
                        <img src={props.pic} className='userPic' />
                        <h3 className='userName' >{props.userName}</h3>
                        <p className='userPosition'>{props.userPosition}</p>
                    </div>
                </div>
                <div className='informaionContainer' >
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
                </div>
            </div>
        </div>
    )

}

export default EmployeeBlock;