export function Login(){
    return(
        <div className="content">
            <div className="inner">
                <h2 className="title">로그인</h2>
                <form className="form">
                    <input placeholder="아이디" maxlength="20"></input>
                    <input type="password" placeholder="비밀번호" ></input>
                    <button className="login_btn" type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}