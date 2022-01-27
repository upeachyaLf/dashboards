export default function tableResolver (data_array) {
	let results = [];
	data_array.map((item,i) => {
		let row_data = [
			{text: i+1},
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

export const storageTableResolver = (data_array) => {
	let results = [];
	data_array.map((item,i) => {
		let row_data = [
			{text: i+1},
			{text: item.Energy_Flow},
			{text: item.Timestamp}
		]
		results.push(row_data);
	})

	return results;
}
