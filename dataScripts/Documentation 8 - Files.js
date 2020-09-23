const fs = require("fs");
const data = fs.readFileSync("DATA.csv", "utf8");
const records = [];
for (const line of data.split("\n")) {
	const values = line.split(",");
	records.push({
		name: values[0],
		id: values[1],
		schema: values[2],
		props: [{
			name: values[3],
			value: values[4]
		}]
	});
}

return {
	recordsToAdd: records
}