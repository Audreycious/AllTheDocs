import React from 'react';
import './Nav.css'
const logoImg = require('./images/cooltext337834407324703.png')


function Nav(props) {
    return (
        <nav>
            <div className="buffer"></div>
            <div className="nav-center">
                <img src={logoImg} alt="AllTheDocs logo"/>
            </div>
            <div className="buffer">
                {window.location.pathname === '/main-page' ? <button onClick={props.handleLogout}>Logout</button> : <button onClick={props.handleLogin}>Login</button>}
            </div>
        </nav>
    )
}

export default Nav