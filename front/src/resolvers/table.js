export default function tableResolver (data_array) {
	let results = [];
	data_array.map(item => {
		let row_data = [
			{text: item.Voltage},
			{text: item.Current},
			{text: item.Power},
			{text: item.Energy},
			{text: item.Timestamp}
		]
		results.push(row_data);
	})

	return results;
}
