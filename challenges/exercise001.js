// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍
export function capitalize(word) {
	if (word === undefined) throw new Error("word is required");
	// Add your code here!

	//Creates a new string out the first letter run through the toUpperCase string method and then adds the rest of the existing string via string.slice
	let str = word[0].toUpperCase() + word.slice(1);

	return str;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error("firstName is required");
	if (lastName === undefined) throw new Error("lastName is required");
	// Add your code here!
	// Build a new string by pulling the first char and upper casing them with a full stop added in between
	let initials = firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();

	//return completed value
	return initials;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined) throw new Error("originalPrice is requied");
	if (vatRate === undefined) throw new Error("vatRate is required");
	// Add your code here!
	// create a new total variable with the requested VAT Rate Addition
	let total = originalPrice + originalPrice * (vatRate / 100);
	// Lower the output down to two decimal places.
	// This can lead to rounding errors in specific edge cases (Thanks floating point artithmetics) but in these test cases it's good enough.
	total = +total.toFixed(2);

	//console debug
	//console.log(total);

	//return value
	return total;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined) throw new Error("originalPrice is required");
	if (reduction === undefined) throw new Error("reduction is required");
	// Add your code here!

	//create a new total variable with the requested sales reduction
	let total = originalPrice - originalPrice * (reduction / 100);
	//same decimal place reduction as before, same comments as before
	total = +total.toFixed(2);
	//return output variable
	return total;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error("str is required");
	// Add your code here!

	console.log("string length: " + str.length);
	//set the half value
	let half = str.length / 2;
	console.log(str.length % 2);
	//if string is of even length
	if (str.length % 2 === 0) {
		//Debug Line
		//console.log(str.substring(half - 1, half + 1));

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
	// Add your code here!
	//declare variable for reversed word
	let newWord = "";

	//iterate backwards through the string
	for (let i = word.length - 1; i >= 0; i--) {
		//add current character to word
		newWord += word[i];
	}

	//return output
	return newWord;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error("words is required");
	// Add your code here!
	//define new array
	let newWords = [];
	//iterate through each word in array
	words.forEach((word) => {
		//repeat of reverseWords(words)
		let newWord = "";
		for (let i = word.length - 1; i >= 0; i--) {
			newWord += word[i];
		}
		//pushes new word into array.
		newWords.push(newWord);
	});
	//return output
	return newWords;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error("users is required");
	// Add your code here!

	//define count variable
	let count = 0;

	//iterate through users
	users.forEach((user) => {
		//if user type matches string
		if (user.type === "Linux" || user.type === "linux") {
			//add to count
			count += 1;
		}
	});

	//return output
	return count;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error("scores is required");
	// Add your code here!
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
	// Add your code here!
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
