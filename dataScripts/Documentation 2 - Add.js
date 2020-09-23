const arr = [{
	id: "Record 1 Unique ID",
	name: "Record 1 Name",
	schema: "TPLT",
	props: [{
		name: "Property 1",
		value: 2500
	}, {
		name: "Float Property",
		value: 5.99
	}, {
		name: "String Property",
		value: "Value for the string property"
	}, {
		name: "Table 1",
		value: [{
			id: "Row ID 1",
			columns: [{
				name: "Float Column 1",
				value: 9.999991
			}]
		}, {
			id: "Row ID 2",
			columns: [{
				name: "Float Column 1",
				value: 9.28521
			}]
		}]
	}]
}, {
	id: "Record 2 Unique ID",
	name: "Record 2 Name",
	schema: "TPLT",
	props: []
}];

return {
	recordsToAdd: arr
}