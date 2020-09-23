const records = [];
for (let i = 0; i < 10000; ++i) {
	records.push({
		id: String(i) + " id",
		name: String(i) + " name",
		schema: "SKIL",
		props: [{
			name: "Test Integer Property",
			value: 7
		}]
	});
}

return {
	recordsToAdd: records
}