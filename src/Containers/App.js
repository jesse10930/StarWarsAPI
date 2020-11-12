import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Button from '../Components/Button';
import Scroll from '../Components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			info: [],
			urls: []
		}
	}

componentDidMount() {
	fetch('https://swapi.py4e.com/api/')
		.then(resp => resp.json())
		.then(data => this.setState({ urls: data }))
}

onButtonClick = (event) => {
	let category = event.target.id;
	this.setState({ info: [] });
	let grabAll = (input) => {
		let grabNext = (url) => {
			return new Promise((resolve, reject) => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						this.setState({ info: this.state.info.concat(data.results)});
						if(data.next === null) {
							resolve();
						}
						else {
							grabNext(data.next).then(resolve2 => {
								resolve(resolve2);
							});
						}
					})
			})
		}
		grabNext(input);
	}
	grabAll(this.state.urls[category]);
}

render() {
		return (
			<div className='tc'>
				<h1>Star Wars Specs</h1>
				<Button buttonClick={this.onButtonClick}/>
				<Scroll>
					<CardList info={this.state.info}/>
				</Scroll>
			</div>
		);
	}
}

export default App;