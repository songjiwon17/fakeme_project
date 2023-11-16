import {Link} from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';

export function About(){
    let navigate = useNavigate();
    return(
        <div className="about_f content">
            <div className='inner'>
                <div className='title'>about fakeme</div>
                <div className='wrap'>
                    <div className='menu'>
                        <button onClick={(()=>{navigate('/about/company')})}>회사소개</button>
                        <button onClick={(()=>{navigate('/about/member')})}>멤버소개</button>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

function AboutCompany(){
    return(
        
    )
}
export default AboutCompany;