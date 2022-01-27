
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

import Table from '../../components/table';
import { storageTableResolver } from '../../resolvers/table';
import energyFlowChartResolver from '../../resolvers/energy_flow_chart';
import socPieChartResolver from '../../resolvers/soc_pie_chart';
import BACKEND_URL from '../../constants/backend_url';

const COLORS = ['#00C49F', '#dddddd'];

export default function Storage() {
	const default_table = {
		header: [{ text: "S No." }, { text: "Energy Flow" }, {text: "State of Charge"}, { text: "Date/Time" }],
		body: []
	}

	const [all_data, setAllData] = useState([]);
	const [table_data, setTableData] = useState(default_table);
	const [energy_flow_chart, setFlowChartData] = useState([]);
	const [soc_chart_data, setSocChartData] = useState([]);

	useEffect(() => {
		fetchData()
	})

	const fetchData = () => {
		const url = `${BACKEND_URL}?api_key=0123456789gad&table_name=u1_generation`;
		fetch(url).then((response) => response.json())
			.then((json) => {
				setAllData(json)
				const data = {
					header: [{ text: "S No." }, { text: "Energy Flow" }, {text: "State of Charge"}, { text: "Date/Time" }],
					body: storageTableResolver(json)
				}
				setTableData(data);
				setFlowChartData(energyFlowChartResolver(json))
				setSocChartData(socPieChartResolver(json))
			}).catch(error => {
				console.log("ERROR==>", error);
			})
		
	}

	return (
		<>
			<h3 style={{ marginBottom: "24px" }}>STORAGE</h3>

			<Row style={{ marginBottom: "36px", marginTop: "36px" }}>
				<Col xs={12} md={8}>
					<div className="card-with-shadow" style={{ width: "100%" }}>
						<h6 style={{ padding: "20px 33px 0px" }}>Energy Flow Chart</h6>
						<hr />
						<div style={{ padding: "16px", width: "100%" }}>
							<ResponsiveContainer width="100%" height={200}>
								<AreaChart
									data={energy_flow_chart}
									margin={{
										top: 5,
										right: 30,
										left: 20,
										bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="timestamp" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Area type="monotone" dataKey="energy_flow" stroke="#8884d8" fill="#8884d8" />
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<div className="card-with-shadow" style={{ width: "100%" }}>
						<h6 style={{ padding: "20px 33px 0px" }}> SOC </h6>
						<hr />
						<ResponsiveContainer width="100%" height={200}>
							<PieChart width={400} height={160} margin={{ top: 130 }}>
								<Pie
									dataKey="value"
									startAngle={180}
									endAngle={0}
									data={soc_chart_data}
									cx="50%"
									cy="70%"
									outerRadius={150}
									fill="#8884d8"
								>
									{soc_chart_data.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
						<h4 style={{ textAlign: "center" }}>
							{ all_data?.[0]?.SoC ? `${Math.ceil(Number(all_data[0].SoC))}%` : "0%" }
						</h4>
					</div>
				</Col>
			</Row>

			<div className="card-with-shadow" style={{ width: "100%", marginTop: "36px", padding: "16px 10px" }}>
				<Table table_data={table_data} />
			</div>


		</>
	)
}
