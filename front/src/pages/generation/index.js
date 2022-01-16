import Table from '../../components/table';

const table_data = {
	header: [{text:"#"}, {text:"First Name"}, {text:"Last Name"}, {text:"User Name"}],
	body: [
		[{text:1}, {text:"Mark"}, {text:"Otto"}, {text:"@mdo"}],
		[{text:2}, {text:"Jacob"}, {text:"Thornton"}, {text:"@fat"}]
	]
}

export default function Generation() {
	return (
		<>
			GENERATION
			<Table table_data={table_data}/>
		</>
	)
}
