import React from 'react';
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
	localStorage.removeItem('jwt');
	props.setCurrentUser(null);
	return <Redirect to='/' />
}

export default Logout;
