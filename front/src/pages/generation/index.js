import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Table from '../../components/table';
import tableResolver from '../../resolvers/table';
import BACKEND_URL from '../../constants/backend_url';

const linechart_data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default function Generation() {
	const default_table = {
		header: [{ text: "Voltage" }, { text: "Current" }, { text: "Power" }, {text: "Energy"}, {text: "Date/Time"}],
		body: []
	}

	const [table_data, setTableData] = useState(default_table);

	useEffect(()=> {
		let url = `${BACKEND_URL}?api_key=0123456789gad&table_name=u1_generation`;
		
		fetch(url).then((response) => response.json())
			.then((json) => {
				const data = {
					header: [ { text: "Voltage" }, { text: "Current" }, { text: "Power" }, {text: "Energy"}, {text: "Date/Time"}],
					body: tableResolver(json)
				}
				 setTableData(data)
			}).catch (error => {
			console.log("ERROR==>", error);
		})
	},[])

	return (
		<>
			<h3 style={{marginBottom: "24px"}}>GENERATION</h3>
		
			<div className="card-with-shadow">
				<h6 style={{padding: "20px 33px 0px"}}>Generation</h6>
				<hr/>
				<div style={{padding: "16px"}}>
					<LineChart
						width={650}
						height={370}
						data={linechart_data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
					</LineChart>
				</div>
			</div>

			<div className="card-with-shadow" style={{width: "100%", marginTop: "36px", padding: "16px 10px"}}>
				<Table table_data={table_data} />
			</div>
		</>
	)
}
