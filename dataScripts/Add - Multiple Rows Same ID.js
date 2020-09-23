const arr = [{
	id: "Record 1 Unique ID",
	name: "Record 1 Name",
	schema: "TPLT",
	props: [{
		name: "Table 1",
		value: [{
			id: "Row ID 1",
			columns: [{
				name: "Float Column 1",
				value: 9.999991
			}]
		}, {
			id: "Row ID 1",
			columns: [{
				name: "Float Column 1",
				value: 9.28521
			}]
		}]
	}]
}];

return {
	recordsToAdd: arr
}