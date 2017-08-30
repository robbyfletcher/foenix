import React from 'react';
import { render } from 'react-dom';

import Chart from './components/chart';
import Nav from './components/nav';

const data = {
	xAxis: 'name',
	data: [
		{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
		{name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
		{name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
		{name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
		{name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
		{name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
		{name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
	]
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			table: data,
		};
		
		this.submitForm = this.submitForm.bind(this);
	}

	csvToJSON(csv){
  	const lines = csv.split("\n");
	  const headers = lines[0].split(",");
  	let result = [];

		for(let i = 1; i < lines.length; i++) {
	  	const currentline=lines[i].split(",");
	  	let obj = {};
	  	
			for(let j = 0; j < headers.length; j++) {
		  	obj[headers[j]] = currentline[j];
	  	}

			result.push(obj);
	  }
  
  	return result; //JavaScript object
	}

	submitForm(e) {
		e.preventDefault();

		const file = document.getElementById('file').files[0];
		const reader = new FileReader();

		reader.onload = (el) => {
			const csv = el.target.result.replace(/"/g, '');

			console.log(this.csvToJSON(csv).map((e) => (React.addons.createFragment(e))));



			debugger;
		}

		reader.readAsText(file);
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-3">
							Foenix
						</h1>					
						<p className="lead">
							{ this.state.table }
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-9">
						<Chart data={data.data} />
					</div>
					<div className="col-1">
						<ul className="nav nav-pills flex-column">
							<li className="nav-item">
								<a className="nav-link active" href="#">All</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">QBs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">RBs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">WRs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">TEs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">D/ST</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">K</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="modal fade" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="settingsModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="settingsModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<form name="fileForm">
								<div className="modal-body">
									<label htmlFor="file" className="custom-file">
										<input type="file" id="file" className="custom-file-input" />
										<span className="custom-file-control" />
									</label>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="button" className="btn btn-primary" onClick={this.submitForm}>Save changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));