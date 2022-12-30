import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {

	render() {
		return (
			<form onSubmit="" className='login-input'>
				<input type='email' placeholder='Email'/>
				<input type='password' placeholder='Password'/>
				<button>Masuk</button>
			</form>
		);
	}

}

// LoginInput.prototype = {
// 	login: PropTypes.func.isRequired
// }

export default LoginInput;