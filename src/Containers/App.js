import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Button from '../Components/Button';
import Scroll from '../Components/Scroll';

class App extends Component {
	constructor() {
		super()
		// initialize state
		this.state = {
			info: [],
			urls: []
		}
	}

	// on initial mount, get data from swapi, store in urls state
	componentDidMount() {
		fetch('https://swapi.py4e.com/api/')
			.then(resp => resp.json())
			.then(data => {
				this.setState({ urls: data });
			})
	}

	// when button clicked, clear info state, created and run grabAll function with category of button as input
	onButtonClick = (event) => {
		let category = event.target.id;
		this.setState({ info: [] });

		// run grabAll on url of category clicked, create and run grabNext function with same url
		let grabAll = (input) => {
			let grabNext = (url) => {
				return new Promise((resolve, reject) => {
					// get data from catgory url, set info state with results
					fetch(url)
						.then(console.log(url))
						.then(resp => resp.json())
						.then(data => {
							this.setState({ info: this.state.info.concat(data.results)});
							// if last result in category data, resolve promise, else run grabNext on next result in category
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