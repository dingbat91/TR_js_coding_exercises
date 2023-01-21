export function capitalize(word) {
	if (word === undefined) throw new Error("word is required");

	//Creates a new string out the first letter run through the toUpperCase string method and then adds the rest of the existing string via string.slice
	const str = word[0].toUpperCase() + word.slice(1);

	return str;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error("firstName is required");
	if (lastName === undefined) throw new Error("lastName is required");

	// Build a new string by pulling the first char and upper casing them with a full stop added in between
	const initials = firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();

	//return completed value
	return initials;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined) throw new Error("originalPrice is requied");
	if (vatRate === undefined) throw new Error("vatRate is required");

	// create a new total variable with the requested VAT Rate Addition
	let total = originalPrice + originalPrice * (vatRate / 100);
	// Lower the output down to two decimal places.
	// This can lead to rounding errors in specific edge cases (Thanks floating point artithmetics) but in these test cases it's good enough.
	total = +total.toFixed(2);

	//return value
	return total;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined) throw new Error("originalPrice is required");
	if (reduction === undefined) throw new Error("reduction is required");

	//create a new total variable with the requested sales reduction
	let total = originalPrice - originalPrice * (reduction / 100);
	//same decimal place reduction as before, same comments as before
	total = +total.toFixed(2);
	//return output variable
	return total;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error("str is required");

	const half = str.length / 2;
	//if string is of even length
	if (str.length % 2 === 0) {
		//return a substring of the two required numbers
		return str.substring(half - 1, half + 1);

		//if Odd
	} else {
		//return the character at the halfway value
		return str.charAt(half);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error("word is required");

	//declare variable for reversed word
	let revWord = "";

	//iterate backwards through the string
	for (let i = word.length - 1; i >= 0; i--) {
		//add current character to word
		revWord += word[i];
	}

	//return output
	return revWord;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error("words is required");

	//define new array
	let revWords = [];
	//iterate through each word in array
	words.forEach((word) => {
		//pushes new word into array using Revword.
		revWords.push(reverseWord(word));
	});
	//return output
	return revWords;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error("users is required");

	const REGEX = new RegExp("linux", "i");
	return users.reduce(
		(acc, user) => (REGEX.test(user.type) ? acc + 1 : acc),
		0
	);
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error("scores is required");

	//define variable for sum
	let total = 0;
	//define mean variable
	let mean = 0;

	//add up each number in array
	scores.forEach((num) => {
		total += num;
	});
	// commit mean calculation (sum/amount of results)
	mean = total / scores.length;
	//set to two decimal places (see previous restrictions)
	mean = mean.toFixed(2);
	//return mean (uses unary plus operator to convert to float)
	return +mean;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error("n is required");

	let output = "";

	switch (true) {
		case n % 5 == 0 && n % 3 == 0:
			output += "fizzbuzz";
			break;
		case n % 3 == 0:
			output += "fizz";
			break;
		case n % 5 == 0:
			output += "buzz";
			break;
		default:
			return n;
	}
	return output;
}
