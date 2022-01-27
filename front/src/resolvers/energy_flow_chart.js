export default function energyFlowChartResolver (data_array) {
	let results = [];
	data_array.map(item => {
		let date = new Date(item.Timestamp);
		let data_point = {
			timestamp: `${date.getHours()}:${date.getMinutes()}`,
			energy_flow: item.Energy_Flow
		}
		results.push(data_point);
	})

	return results;
}

