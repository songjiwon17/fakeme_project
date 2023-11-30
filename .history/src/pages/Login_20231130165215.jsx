export function Login(){
    return(
        <div className="content">
            <div className="inner">
                <h2 className="title">로그인</h2>
                <form className="form">
                    <input placeholder="아이디를 입력하세요"></input>
                    <input type="password" placeholder="비밀번호를 입력하세요"></input>
                </form>
            </div>
        </div>
    )
}