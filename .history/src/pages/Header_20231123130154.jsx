import {Link, NavLink} from 'react-router-dom';
import LocaleSelect from '../components/LocaleSelect';
import useTranslate from '../hokks/useTranslate';

function getLinkStyle({isActive}){
  return{
    textDecoration: isActive? 'underline' : undefined,
    backgroundColor: isActive? 'white' : undefined
  }
}

export function Header(){
  const t = useTranslate();

    return(
        <header>
        <div className='inner'>
          <h1 className='logo'><Link to='/'><img src="/images/logo/logo_fakeme.png" alt='상단fakeme로고이미지'></img></Link></h1>
          <div className='gnb'>
            <ul className='wrap'>
              <li><NavLink to ='/about' style={getLinkStyle}>about</NavLink></li>
              <li><NavLink to ='/product' style={getLinkStyle}>product</NavLink></li>
              <li><NavLink to ='/frame' style={getLinkStyle}>frame</NavLink></li>
              <li><NavLink to ='/contact' style={getLinkStyle}>contact</NavLink></li>
              <li><NavLink to ='/fakeme' style={getLinkStyle}>fakeme</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='top_nav'>
          <LocaleSelect/>
          <button type='button' className='subcribe'>{t('subscribe button')}</button>
          <div className='panel' onClick={()=>{
            console.log('test');
            
            }}><img src='/images/panel_icon.png' alt='패널아이콘'/></div>
        </div>
      </header>
    )
}