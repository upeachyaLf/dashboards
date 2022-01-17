import Table from 'react-bootstrap/Table';

/**
 * @param {table_data} props
 */
export default function CustomTable (props) {
	const { table_data } = props;

	return (
		<Table>
				<thead>
					<tr>
						{table_data.header.map((header, i) => {
							return (
								<th key={`th-${i}`}> {header?.text} </th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{table_data.body.map((row, r)=> {
						return(
							<tr key={`table-row-${r}`}>
								{row.map((col, c)=> {
									return (
										<td key={`table-col-${r},${c}`}>
											{col?.text}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</Table>
	)
}

// sample table_data
//  const table_data = {
// 	header: [{text:"#"}, {text:"First Name"}, {text:"Last Name"}, {text:"User Name"}],
// 	body: [
// 		[{text:1}, {text:"Mark"}, {text:"Otto"}, {text:"@mdo"}],
// 		[{text:2}, {text:"Jacob"}, {text:"Thornton"}, {text:"@fat"}]
// 	]
// }
