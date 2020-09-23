return {
	modifyRecords: (record) => {
		if (record.getSchema().getPrefix() !== "TPLT") {
			return false;
		}
		const property = record.getPropertyByName("Skill Level");
		if (record.getPropertyValue(property) < 3) {
			record.setPropertyValue(property, 3);
			return true;
		}
		return false;
	}
}