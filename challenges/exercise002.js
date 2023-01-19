export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error("ingredients is required");
	// Your code here!
	//outputs filling value
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error("person is required");
	// Your code here!

	//if person is from Manchester return true
	if (person.city.match(/manchester/gi)) return true;

	return false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error("people is required");
	// Your code here!

	//define count for busses
	let buscount = 0;
	//while there are people to collect
	while (people > 0) {
		//add 1 to buscount
		buscount++;
		//subtract 1 bus worth of people (40)
		people = people - 40;
	}

	//return amount of busses needed.
	return buscount;
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error("arr is required");
	// Your code here!

	//define sheet counter
	let count = 0;
	//iterate through array
	arr.forEach((x) => {
		//if sheep increment counter
		if (x === "Sheep" || x === "sheep") count++;
	});

	return count;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error("person is required");
	// Your code here!

	//if persons address isn't manchester (case insensitive regex)
	if (!person.address.city.match(/manchester/gi)) return false;

	// checks first letter of postcode
	if (person.address.postCode.charAt(0) === "M") return true;

	return false;
}
