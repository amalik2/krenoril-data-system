return {
	deleteRecords: (record) => {
		if (record.getSchema().getPrefix() !== "TPLT") {
			return false;
		}
		const property = record.getPropertyByName("Skill Level");
		return record.getPropertyValue(property) < 2;	// delete records with skill level less than 2
	},
	modifyRecords: (record) => {
		if (record.getSchema().getPrefix() !== "TPLT") {
			return false;
		}
		const property = record.getPropertyByName("Skill Level");
		
		// limit skill level to a max of 50
		if (record.getPropertyValue(property) > 50) {
			record.setPropertyValue(property, 50);
			return true;
		}
		return false;
	},
	recordsToAdd: [{
		id: "Unique ID",
		name: "Default Skill Level",
		schema: "TPLT",
		props: []
	}]
}