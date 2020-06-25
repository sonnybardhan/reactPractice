import React from 'react';

export default class NameForm extends React.Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value }, () => {
			console.log(name, this.state[name]);
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(`you submitted: ${this.state.name}`);
		this.setState({ name: '' });
	};

	render() {
		return (
			<div>
				<form action="" onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
					<label htmlFor="email">Email</label>
					<input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
					<label htmlFor="password">Password</label>
					<input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
