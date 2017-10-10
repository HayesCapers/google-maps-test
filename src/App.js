import React, { Component } from 'react';
import GMap from './components/MapV3';

class App extends Component {
	render() {
		const API_KEY = 'AIzaSyCGgnk1VDmVC34up2u0-IhJsIj7lodETHQ';
		console.log(API_KEY)
		const URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`

		return (
			<div className="App">
				<GMap
					googleMapURL={URL}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

export default App;
