return {
	modifyRecords: (record) => {
		if (record.getSchema().getPrefix() === "TPLT") {
			const property = record.getPropertyByName("Table Property Name");
			const rows = record.getPropertyValue(property);
			let modified = false;
			for (let i = 0; i < rows.length; ++i) {
				const column = property.getIntColumn("Skill Level");
				const skillLevel = rows[i].data.get(column);
				if (skillLevel < 10) {
					rows[i].data.set(column, 10);
					modified = true;
				}
			}
			return modified;
		}
	}
}