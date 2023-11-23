import {Link, NavLink} from 'react-router-dom';
import LocaleSelect from '../components/LocaleSelect';
import useTranslate from '../hokks/useTranslate';

export function Header(){
  const t = useTranslate();

    return(
        <header>
        <div className='inner'>
          <h1 className='logo'><Link to='/'><img src="/images/logo/logo_fakeme.png" alt='상단fakeme로고이미지'></img></Link></h1>
          <div className='gnb'>
            <ul className='wrap'>
              <li><Link to ='/about'>about</Link></li>
              <li><Link to ='/product'>product</Link></li>
              <li><Link to ='/frame'>frame</Link></li>
              <li><Link to ='/contact'>contact</Link></li>
              <li><Link to ='/fakeme'>fakeme</Link></li>
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