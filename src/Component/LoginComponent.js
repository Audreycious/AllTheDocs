import React from 'react';
function LoginComponent() {
    return (
        <div>
            <div className='login-header'>

            </div>
            <div className='login-section'>

            </div>
            <div className='login-footer'>
            <form>
                <label>UserName:<input type="text" className="loginUName"></input></label>
                <label>Password:<input type="password" className="loginPsw"></input></label>
                <button className="btnLogin">LogIn</button>
            </form>
            </div>
        </div>
    );
}
export default LoginComponent;