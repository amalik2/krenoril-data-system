return {
	modifyRecords: (record) => {
		if (record.getSchema().getPrefix() === "TPLT") {
			const property = record.getPropertyByName("Table Property Name");
			const rows = record.getPropertyValue(property);
			record.setPropertyValue(property, rows.slice(0, 3));
			return true;
		}
		return false;
	}
}