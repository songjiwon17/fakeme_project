import {Link} from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import useTranslate from '../hokks/useTranslate';

export function About(){
    const navigate = useNavigate();
    const t = useTranslate();

    return(
        <div className="about_f content">
            <div className='inner'>
                <div className='title'>about fakeme</div>
                <div className='wrap'>
                    <div className='menu'>
                        <button onClick={(()=>{navigate('/about/company')})}>{t('company button')}</button>
                        <button onClick={(()=>{navigate('/about/member')})}>{t('member button')}</button>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

function AboutCompany(){
    const t = useTranslate();
    return(
        <div className='box company'>
            <div className='inner'>
              <div className='wrap'>
                <div className='pic'><img src='../../images/about/about_001.png'/></div>
                <h3 className='title'>{t('title_01')}</h3>
                <p className='txt'>{t('txt_01')}</p>
              </div>
              <div className='wrap'>
              <div className='pic'><img src='../../images/about/about_01.png'/></div>
                <h3 className='title'>{t('title_02')}</h3>
                <p className='txt'>{t('txt_02')}</p>
              </div>
              <div className='wrap'>
              <div className='pic'><img src='../../images/about/about_02.png'/></div>
                <h3 className='title'>You Look Good Enough</h3>
                <p className='txt'>t({'txt_03'})</p>
              </div>
            </div>
          </div>
    )
}
export default AboutCompany;

export function AboutMember(){
    return(
        <div className='box member'>멤버소개_추후 변경예정</div>
    )
}