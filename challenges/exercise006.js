/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error("arr is required");

	let sum = 0;

	arr.forEach((num) => {
		if (num % 3 === 0 || num % 5 === 0) sum += num;
	});
	return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error("str is required");

	//Returns Opposite of str.match if it picks up anything other than the required issues (using case insensitive matching)
	return !str.match(/[^CGTA]/);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error("str is required");

	//set empty complimentary string
	let complimentaryString = "";
	//iterate through string
	[...str].forEach((char) => {
		//switch case base on character, adds matching pair to the complimentary string
		switch (char) {
			case "T":
				complimentaryString = complimentaryString + "A";
				break;
			case "C":
				complimentaryString = complimentaryString + "G";
				break;
			case "A":
				complimentaryString = complimentaryString + "T";
				break;
			case "G":
				complimentaryString = complimentaryString + "C";
				break;
			//else returns a null value;
			default:
				complimentaryString = null;
				return;
		}
	});
	//return complimentaryString Variable
	return complimentaryString;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error("n is required");

	//if it ain't a number throw it out
	if (typeof n !== "number") return false;
	//if it's one, it's not prime (Math crazyness)
	if (n === 1) return false;
	//defines the numbers square root as a variable, at least one factor must be below sqrt if not a prime
	let sqrtnum = Math.sqrt(n);
	//set prime boolean (true to begin)
	let primeNum = true;
	//iterate up to sqrt
	for (let i = 2; i < sqrtnum; i++) {
		//if it finds something that divides with no remained, it's not prime
		if (n % i === 0) primeNum = false;
		//escape the loop
		break;
	}
	//return boolean
	return primeNum;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the fill of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */

export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error("n is required");
	if (fill === undefined) throw new Error("fill is required");

	let innermatrix = new Array(n).fill(fill);
	let matrix = new Array(n).fill(innermatrix);

	return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error("staff is required");
	if (day === undefined) throw new Error("day is required");

	let regex = new RegExp("(" + day + ")", "gi");
	let daycount = 0;
	staff.map((person) => {
		if (person.rota.some((e) => regex.test(e))) daycount++;
	});
	if (daycount >= 3) return true;
	return false;
};
