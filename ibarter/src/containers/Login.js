import React from 'react'

const API = "https://ibarter.herokuapp.com/api/";

class Login extends React.Component {
	
	state = {
		email: "",
		password: ""
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const request = {"auth": this.state};
		
		fetch(`${API}user_token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(request)
		})
			.then(resp => resp.json())
			.then(data => {
				localStorage.setItem("jwt", data.jwt);
				this.context.history.push("/");
			})
			.catch(error => console.log('error', error));
	}      

	render() {
		return (
			<div className="form">
				<h1>Log In</h1>
				<label name="email">Email: </label>
				<input name="email" type="email" onChange={this.onChange} />
				<label name="password">Password:</label>
				<input name="password" id="password" type="password" onChange={this.onChange}/>
				<button onClick={this.handleSubmit}>Submit</button>
				<button>Sign Up</button>
			</div>
		);
	}
}

export default Login;
