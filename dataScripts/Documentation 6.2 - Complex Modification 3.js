return {
	modifyRecords: (record) => {
		if (record.getSchema().getPrefix() === "TEST") {
			const property = record.getPropertyByName("Table Property");
			property.addRow(record);
			property.addRow(record);
			return true;
		}
		return false;
	}
}