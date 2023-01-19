export function getSquares(nums) {
	if (nums === undefined) throw new Error("nums is required");
	// Your code here!

	//define empty array for squared numbers
	let squared = [];

	//iterate through passed array of numbers
	nums.forEach((num) => {
		// square number into square variable and push to squared array
		const square = num * num;
		squared.push(square);
	});

	//output squared array
	return squared;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error("words is required");
	// Your code here!

	// Define a string with the camelcased words (init with first word lowercased)
	let camelString = words[0].toLowerCase();

	//iterate through words array
	for (let i = 1; i < words.length; i++) {
		//create camelcased word
		const camelWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		//add word to camelcased string
		camelString += camelWord;
	}
	//return calmcased string
	return camelString;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error("people is required");
	// Your code here!

	//define subject count
	let count = 0;

	//iterate through people array
	people.forEach((person) => {
		//if person has a subject, add the amount of subjects to the count
		if (person.subjects.length > 0) count += person.subjects.length;
	});

	//return the count of subjects
	return count;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error("menu is required");
	if (!ingredient) throw new Error("ingredient is required");
	// Your code here!
	//declare boolean for check
	let ingredientFound = false;

	//iterate through menu
	menu.forEach((item) => {
		//iterate through ingredients
		item.ingredients.forEach((menuingredient) => {
			//if item is in ingredients set ingredientFound to true
			if (menuingredient === ingredient) ingredientFound = true;
		});
	});

	//return output
	return ingredientFound;
}
export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error("arr1 is required");
	if (arr2 === undefined) throw new Error("arr2 is required");
	// Your code here!

	//sort array into ascending order
	arr1.sort();
	arr2.sort();

	//store duplicate numbers to output
	let duplicates = [];

	//filter for duplicates by comparing if any item exists in arr 2
	duplicates = arr1.filter((item) => arr2.includes(item));
	//rebuild the array as a new set, sets can only contain unique values
	duplicates = [...new Set(duplicates)];

	//return output
	return duplicates;
}
