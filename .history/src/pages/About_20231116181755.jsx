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
        <div className='box company'>
            <div className='inner'>
              <div className='wrap'>
                <div className='pic'><img src='../../images/about/about_001.png'/></div>
                <h3 className='title'>페이크미는 아름다움의 다양함을 환기시키는 흥미로운 브랜드 입니다.</h3>
                <p className='txt'>
                  우리는 디자인을 하고 제품을 만들어 냅니다.
                  제품은 아름다워야 하며, 디자인은 선의(善意)를 가지고 있어야 합니다. 디자인이 가진 직접적인 선의는 최신 트랜드를 홍보하는 것이 아니라,
                  폭넓고 다양한 아름다움에 대해 이야기하는 것이라 믿습니다. 그로써 미(美)의 기준을 넓혀갈 수 있게 도움을 주는 것입니다.
                  그렇게 얻은 아름다움에 대한 절차의 정당성을 확보하고, 정통성을 가질 수 있게 하는 것. 이것이 페이크미가 하고 있는 일입니다.
                </p>
              </div>
              <div className='wrap'>
              <div className='pic'><img src='../public/images/about/about_01.png'/></div>
                <h3 className='title'>가림과 변화, 시선과 응시</h3>
                <p className='txt'>
                  아이웨어는 주체와 타자사이에 존재하는 제3의 요소입니다.  
                  그렇기에 아이웨어는 주체를 보고 있는 타자와 타자에게 보여지는 주체와의 관계 속에서만 기능합니다.
                  위와 같은 관계의 특성을 시각화함으로 '가림과 변화', '시선과 응시'의 의미를 제품과 디자인으로 표현합니다.
                  이러한 페이크미의 행동이 사용자에게 스스로를 즐겁게 찾아 갈 수 있는 영감이 되길 희망합니다.
                </p>
              </div>
              <div className='wrap'>
              <div className='pic'><img src='../public/images/about/about_02.png'/></div>
                <h3 className='title'>You Look Good Enough</h3>
                <p className='txt'>
                  페이크미가 생각하는 소비자는 브랜드의 환상을 소비하는 사람도 아니며, 트렌드에 맞게 변해야 하는 대상도 아닙니다.
                  온전하게 당신다움으로 충분히 아름답다는 것을 인정하는 사람들이길 바랍니다.
                  그들과 함께 '이것도 아름다울 수 있는가?'에 대한 합당한 동의를 얻어 가려합니다.
                  이같은 태도가 페이크미를 차별화시키며, 유지시키는 힘입니다.
                </p>
              </div>
            </div>
          </div>
    )
}
export default AboutCompany;

export function AboutMember(){
    return(
        <div className='box member'>멤버소개</div>
    )
}