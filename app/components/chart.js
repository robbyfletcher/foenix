import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

class Chart extends React.Component {
	render() {
		return (
			<div>
				<ResponsiveContainer width='100%' aspect={4}>
					<BarChart data={this.props.data.data}
						margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey={this.props.data.xAxis}/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend />
						<Bar dataKey="uv" fill="#8884d8" />
						<Bar dataKey="pv" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

export default Chart;