import { useState } from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import tab from '../data/tab';
import useTranslate from '../hokks/useTranslate';

export function Main(){
    const [tabInfo, setTabInfo] = useState(tab);
    const [Menu, setMenu] = useState('all');
    const t = useTranslate();
    return(
        <div className="main">
            <section className='visual'></section>
            <section className='fakeme23 content'>
            <div className='inner'>
                <h2 className='title'>fakeme'23</h2>
                <p className='txt'>
                    Fakeme is located one step away from Fashion field doing meaningless &<br/>
                    repetitive copy to target trend-obsessed customers.
                </p>
                <div className='tab_btn'>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('all');}}>NEW</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('best');}}>BEST</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('frame');}}>FRAME</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('stuff');}}>STUFF</a>
                </div>
                <div className='wrap'>
                    {
                        tabInfo.map((e,i)=>{
                            return(
                                (Menu == 'all')
                                ?<TabBox key={i} item={e}></TabBox>
                                :(Menu == e.category)
                                ?<TabBox key={i} item={e}></TabBox>
                                :null
                            )
                        })
                    }
                </div>
            </div>
            </section>
            <section className='about content'>
                <div className='inner'>
                    <h2 className='title'>about fakeme</h2>
                    <div className='wrap'>
                        <div className='pic'>
                            <img src='/images/about/about_001.png' alt=''></img>
                        </div>
                        <div className='info'>
                            <h3>Blind & Change Sight & Stare</h3>
                            <p className='txt'>{t('main_txt_01')}</p>
                        </div>
                    </div>
                    <div className='wrap'>
                        <div className='pic'>
                            <img src='/images/about/about_02.png' alt='about fakeme 이미지02'/>
                        </div>
                        <div className='info'>
                            <h3>You Look Good Enough</h3>
                        </div>
                    </div>
                    <div className='wrap'>
                        <div className='pic'>
                            <img src='/images/about/about_01.png' alt='about fakeme 이미지03'/>
                        </div>
                        <div className='info'>
                            <p className='txt'>{t('main_txt_02')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='banner content'>
                <h3>NATURAL BORN 2</h3>
            </section>
            <section className='best content'>
                <div className='inner'>
                <h2 className='title'>best frame</h2>
                <p className='txt'>A frame that gives off a simple and special atmosphere as if it permeates your daily life</p>
                <div className='wrap'>
                    <div className='box'>
                    <Link to='/frame'><img src='/images/frame/best_frame_001.jpg' alt=''/></Link>
                    </div>
                    <div className='box'>
                    <img src='/images/frame/best_frame_002.jpg' alt=''/>
                    </div>
                    <div className='box'>
                    <h4>FAKEME'23</h4>
                    </div>
                    <div className='box'>
                    <img src='/images/frame/best_frame_003.jpg' alt=''/>
                    </div>
                    <div className='box'>
                    <Link to='/frame'><img src='/images/frame/best_frame_004.jpg' alt=''/></Link>
                    </div>
                    <div className='box'>
                    <img src='/images/frame/best_frame_005.jpg' alt=''/>
                    </div>
                    <div className='box'>
                    <h4>FAKEME'23</h4>
                    </div>
                    <div className='box'>
                    <Link to='/frame'><img src='/images/frame/best_frame_006.jpg' alt=''/></Link>
                    </div>
                    <div className='box'>
                    <img src='/images/frame/best_frame_007.jpg'alt=''/>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
function TabBox(props){
    let item = props.item;
    let baseUrl = '../../images/tab_menu/';
    let imgSrc = baseUrl + item.imgSrc;
    return(
        <div className='pic'>
            <img src={imgSrc} alt=''/>
        </div>
    )
}