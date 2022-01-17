import { PieChart, Pie } from 'recharts';
import { Row, Col} from 'react-bootstrap'

const data_one = {
	title: "Pie chart one",
	data: [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
		{ name: 'Group E', value: 278 },
		{ name: 'Group F', value: 189 },
	]
}

const data_two = {
	title: "Pie chart two",
	data: [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
		{ name: 'Group E', value: 278 },
		{ name: 'Group F', value: 189 },
	]
};

const data_three = {
	title: "Pie chart three",
	data: [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
		{ name: 'Group E', value: 278 },
		{ name: 'Group F', value: 189 },
	]
};

const pie_charts = [data_one, data_two, data_three]

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Storage() {
	return(
		<>
			<h3 style={{marginBottom: "24px"}}>GENERATION</h3>
			
			<Row>
				{pie_charts.map(chart => <>
					<Col xs={12} md={4} style={{ width:"fit-content", margin:"auto", marginBottom: "24px",}}>
						<div className="card-with-shadow">
							<h6 style={{padding: "20px 33px 0px"}}> {chart.title} </h6>
							<hr/>
							<PieChart width={400} height={250}>
								<Pie
									dataKey="value"
									startAngle={180}
									endAngle={0}
									data={chart.data}
									cx="50%"
									cy="70%"
									outerRadius={120}
									fill="#8884d8"
									label
								/>
							</PieChart>
						</div>
					</Col>
				</>)}
			</Row>
		</>
	)
}
