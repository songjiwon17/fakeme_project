import {Link} from 'react-router-dom';

function NotFoundPage(){
    return(
        <div className='content'>
            <div className='inner'>
                <div className='wrap'>
                    <h3>존재하지않는 페이지입니다.</h3>
                    <Link to='/'><button>FAKEME HOME으로 가기</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;