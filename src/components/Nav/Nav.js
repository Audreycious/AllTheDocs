import React from 'react';
import './Nav.css'


function Nav(props) {
    return (
        <nav>
            <div className="buffer"></div>
            <div className="nav-center">
                Nav 
            </div>
            <div className="buffer">
                {window.location.pathname === '/main-page' ? <button onClick={props.handleLogout}>Logout</button> : <button onClick={props.handleLogin}>Login</button>}
            </div>
        </nav>
    )
}

export default Nav