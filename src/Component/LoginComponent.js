import React from 'react';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                username: '',
                password: ''
            };
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(event) {
        //placeholder for sending api call to the server to validate the user
    }
    handleDataChange =e => {
        
        this.setState({
            [e.target.name]:e.target.value

        })
    }

    render() {
        return (
            <div>
                <div className='login-header'>

                </div>

                <form>
                    <label>UserName:<input type="text" onChange={this.handleDataChange} value={this.state.username} name="username"></input></label>
                    <label>Password:<input type="password" onChange={this.handleDataChange} value={this.state.password} name = "password"></input></label>
                    <button className="btnLogin" type="submit" onClick={(event) => this.handleClick(event)}>LogIn</button>
                </form>

                <div className='login-footer'>

                </div>
            </div>
        );
    }
}
export default LoginComponent;