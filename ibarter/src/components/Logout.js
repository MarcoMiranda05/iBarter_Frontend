import React from 'react';
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
	localStorage.removeItem('jwt');
	props.setIsLogged(false);
	return <Redirect to='/' />
}

export default Logout;
