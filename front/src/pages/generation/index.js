import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Table from '../../components/table';

const table_data = {
	header: [{ text: "#" }, { text: "First Name" }, { text: "Last Name" }, { text: "User Name" }],
	body: [
		[{ text: 1 }, { text: "Mark" }, { text: "Otto" }, { text: "@mdo" }],
		[{ text: 2 }, { text: "Jacob" }, { text: "Thornton" }, { text: "@fat" }]
	]
}

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
