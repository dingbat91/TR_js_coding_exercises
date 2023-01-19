/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
	if (n === undefined) throw new Error("n is required");

	//Make sure input is actually a number and we're not getting garbage data. (No strings here!)
	if (typeof n !== "number") throw new Error("n must be a number!");

	//declare total sum to return
	let sumResult = 0;
	//convert number to string (Okay some strings are allowed here, but we get to make them!)
	const inputString = n.toString();

	//Convert string to an array, iterate through, covert each element BACK into a number and add it to sumResult.
	[...inputString].forEach((num) => {
		sumResult += +num;
	});

	//return the summed result
	return sumResult;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
	if (start === undefined) throw new Error("start is required");
	if (end === undefined) throw new Error("end is required");

	//create stepped storage array
	let steps = [start];

	//iterate through steps and add to array.
	for (let i = start + step; i < end; i += step) {
		steps.push(i);
	}
	steps.push(end);
	//return the array of steps (or a 2000's pop group if you can code that.)
	return steps;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
	if (users === undefined) throw new Error("users is required");
	if (date === undefined) throw new Error("date is required");

	//define array of people with too much screentime (slackers!)
	let tooMuchTime = [];

	//iterate through users array
	users.forEach((user) => {
		//pull the the screemtime array if it contains the requested date
		let dateScreenTime = user.screenTime.find(
			(screentime) => screentime.date === date
		);

		//if the date was found, and the screemtime is greater than 100 (reduced down with reducer function)
		if (
			dateScreenTime !== undefined &&
			Object.values(dateScreenTime.usage).reduce((acc, curr) => acc + curr) >
				100
		) {
			//add name to the list of slackers (tut tut)
			tooMuchTime.push(user.username);
		}
	});

	//if no people, return null
	if (tooMuchTime.length === 0) return null;

	//return the list
	return tooMuchTime;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
	if (hexStr === undefined) throw new Error("hexStr is required");

	//pull out params for checking
	let str = hexStr;
	//check for # at start of string
	if (str.charAt(0) !== "#") str = "#" + str;

	//split the int into it's components and convert to base 10
	const hexSplit = [
		parseInt(str.slice(1, 3), 16),
		parseInt(str.slice(3, 5), 16),
		parseInt(str.slice(5, 7), 16),
	];
	//construct RGB string
	const rgb =
		"rgb(" + hexSplit[0] + "," + hexSplit[1] + "," + hexSplit[2] + ")";

	//return RGB String
	return rgb;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error("board is required");

	//define magic square for win check
	const mSquare = [
		[8, 1, 6],
		[3, 5, 7],
		[4, 9, 2],
	];

	let rowMap = mSquare.map((x, i) => {
		return x.map((y, j) => {
			switch (board[i][j]) {
				case "X":
					return y;
				case "0":
					return Math.abs(y) * -1;
				case null:
					return 0;
			}
		});
	});

	//mapping out columns and rows for win
	let colMap = [];
	//mapping out diagonals for win check
	let diagMap = [];
};
