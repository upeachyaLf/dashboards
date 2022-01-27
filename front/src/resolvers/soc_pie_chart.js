export default function socPieChartResolver(data_array) {
	const data = Number(data_array[0].SoC);
	return [
		{ name: 'Filled', value: data },
		{ name: 'Empty', value: 100 - data }
	]
}
