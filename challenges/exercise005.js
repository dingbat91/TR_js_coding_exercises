export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error("nums is required");
	if (n === undefined) throw new Error("n is required");

	//iterate through nums array to find index that contains n
	const index = nums.findIndex((num) => {
		return num === n;
	});

	//if Index is found AND isn't the last index
	if (index !== -1 && index !== nums.length - 1) {
		//return number one ahead of index
		return nums[index + 1];
		//else return null
	} else return null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error("str is required");

	//declare empty counter object
	let counter = { 1: 0, 0: 0 };

	// iterate through string using spread operator (Didn't know you could do this till now!)
	[...str].forEach((c) => {
		//switch case per char in string
		switch (c) {
			//if 1
			case "1":
				//increment 1 counter
				counter[1]++;
				break;
			//if 0
			case "0":
				// increment 0 counter
				counter[0]++;
				break;
		}
	});
	return counter;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error("n is required");

	//turn incoming number array into string
	let reverse = n.toString();
	//turn string into array, reverse it, and rejoin it together
	reverse = [...reverse].reverse().join("");
	//parse as base 10 intgeger
	reverse = parseInt(reverse, 10);
	//return value
	return reverse;
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error("arrs is required");

	//sum counter
	let sum = 0;

	//iterate over prime arrays
	arrs.forEach((arr) => {
		//iterate through sub arrays
		arr.forEach((num) => {
			//add numbers to sum
			sum += num;
		});
	});

	//return sum
	return sum;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error("arr is required");

	//take array for manipulation
	let newArr = arr;

	//swap items over by cross assigning them
	[newArr[0], newArr[newArr.length - 1]] = [
		newArr[newArr.length - 1],
		newArr[0],
	];

	//return new array
	return newArr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error("haystack is required");
	if (searchTerm === undefined) throw new Error("searchTerm is required");

	//make regex to search for search term - case insensitivity
	const regex = new RegExp("(" + searchTerm + ")", "gi");
	// split object down into an array
	const objectarray = Object.values(haystack);
	//returns true if any item in the array tests true against the regex (global, case insensitivity)
	return objectarray.some((item) => regex.test(item));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error("str is required");

	//create empty counting object
	let countObject = {};
	//clean off punctuation with regex
	let cleanstring = str.replace(/[^\sa-zA-Z]/g, "");
	//split into array.
	cleanstring = cleanstring.split(" ");

	//iterate through array
	cleanstring.forEach((x) => {
		//if the key already exists
		if (x in countObject) {
			//increment the count
			countObject[x.toLowerCase()]++;
		} else {
			//create a key with a count of 1
			countObject[x.toLowerCase()] = 1;
		}
	});

	//return object
	return countObject;
};
