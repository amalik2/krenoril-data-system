return {
	deleteRecords: (record) => {
		return record.getSchema().getPrefix() !== "TEST";
	}
}