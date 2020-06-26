import React, { Component } from 'react';
import axios from 'axios';

export default class GithubUserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			imgUrl: '',
			name: '',
			bio: ''
		};
		console.log('constructor');
	}

	componentDidMount() {
		const url = `https://api.github.com/users/${this.state.user}`;
		axios.get(url).then((res) => {
			const data = res.data;
			this.setState({
				imgUrl: data.avatar_url,
				bio: data.bio,
				name: data.name
			});
		});
		console.log('component did mount ran');
	}

	componentDidUpdate() {
		console.log('component did update ran');
	}

	render() {
		console.log('render function ran');
		return this.state.name ? (
			<div>
				<div>name: {this.state.name}</div>
				<img src={this.state.imgUrl} alt="" />
				<div>About me: {this.state.bio}</div>
			</div>
		) : (
			<div className="">Loading ...</div>
		);
	}
}
