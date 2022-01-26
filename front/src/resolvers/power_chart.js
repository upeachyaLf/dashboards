export default function powerChartResolver (data_array) {
	let results = [];
	data_array.map(item => {
		let date = new Date(item.Timestamp);
		let data_point = {
			timestamp: `${date.getHours()}:${date.getMinutes()}`,
			power: item.Power
		}
		results.push(data_point);
	})

	return results;
}

