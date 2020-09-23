return {
	deleteRecords: (record) => {
		if (record.getSchema().getPrefix() !== "SKIL") {
			return false;
		}
		const property = record.getPropertyByName("File Path");
		return record.getPropertyValue(property).length > 4;
	}
}