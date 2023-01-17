export function findSmallNums(nums) {
	if (!nums) throw new Error("nums is required");
	// Your code here
	//filter through array
	let smallNums = nums.filter((item) => {
		//if less than one
		if (item < 1.0) {
			//pass filter
			return true;
		}
		//get rejected
		return false;
	});

	//return filtered array
	return smallNums;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error("names is required");
	if (!char) throw new Error("char is required");
	// Your code here

	//filter array
	let nameSearch = names.filter((name) => {
		//if first letter of name matches parameter return true
		if (name.charAt(0) === char) return true;
		//else return false
		return false;
	});

	return nameSearch;
}

export function findVerbs(words) {
	if (!words) throw new Error("words is required");
	// Your code here
	//filter list
	let verbs = words.filter((word) => {
		//compare initial substring against condition
		if (word.substring(0, 3) === "to " || word.substring(0, 3) === "To ") {
			return true;
		}
		return false;
	});
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error("nums is required");
	// Your code here

	//Filter array
	let integers = nums.filter((n) => {
		//if an integer return the item
		if (Number.isInteger(n)) return true;
		//else discard
		return false;
	});
	//return list of integers
	return integers;
}

export function getCities(users) {
	if (!users) throw new Error("users is required");
	// Your code here
	//define array for cities
	let cities = [];

	//iterate through users
	users.map((user) => {
		//add city of user to cities array
		cities.push(user.data.city.displayName);
	});

	//return cities array
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error("nums is required");
	// Your code here

	//declate storage of root numbers
	let roots = [];

	//iterate through numbers
	nums.map((n) => {
		//get square root
		let root = Math.sqrt(n);
		//add root fixed to two decimal places to roots array using unary operate to transform to s number
		roots.push(+root.toFixed(2));
	});

	return roots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error("sentences is required");
	if (!str) throw new Error("str is required");
	// Your code here

	// define array of filtered sentences
	let includedSentences = [];
	//define regex to filter against
	let regex = new RegExp("(" + str + ")", "gi");
	//iterate through array of sentences
	sentences.map((sentence) => {
		//filter against regex
		if (sentence.match(regex) !== null) {
			//if a match push to included array
			includedSentences.push(sentence);
		}
	});

	//return array of sentences that match pattern
	return includedSentences;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error("triangles is required");
	// Your code here

	//define array of filtered triangles
	let longestSides = [];

	//iterate through array of triangles
	triangles.map((triangle) => {
		//return highest number in array of sides using spread operator
		longestSides.push(Math.max(...triangle));
	});

	//return full array
	return longestSides;
}
