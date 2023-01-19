import {
	sumDigits,
	createRange,
	getScreentimeAlertList,
	hexToRGB,
	findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
	test("Should sum up total of digits. eg. 123=6", () => {
		const result = sumDigits(123);
		const expected = 6;
		expect(result).toBe(expected);
	});

	test("Don't accept non number data", () => {
		const data = "WHAT AM I DOING HERE!?!";
		expect(() => sumDigits(data)).toThrow("n must be a number!");
	});
});

describe("createRange", () => {
	test("should give a stepped array set by params", () => {
		const result = createRange(2, 10, 2);
		const expected = [2, 4, 6, 8, 10];
		expect(result).toStrictEqual(expected);
	});

	test("Test with odd steps", () => {
		const result = createRange(3, 11, 3);
		const expected = [3, 6, 9, 11];
		expect(result).toStrictEqual(expected);
	});

	test(`should work when the step parameter isn't passed`, () => {
		const result = createRange(2, 10);
		const expected = [2, 3, 4, 5, 6, 7, 8, 9, 10];
		expect(result).toStrictEqual(expected);
	});
});

describe("getScreentimeAlertList", () => {
	test("should return beth_1234", () => {
		const data = [
			{
				username: "beth_1234",
				name: "Beth Smith",
				screenTime: [
					{
						date: "2019-05-01",
						usage: { twitter: 34, instagram: 22, facebook: 40 },
					},
					{
						date: "2019-05-02",
						usage: { twitter: 56, instagram: 40, facebook: 31 },
					},
					{
						date: "2019-05-03",
						usage: { twitter: 12, instagram: 15, facebook: 19 },
					},
					{
						date: "2019-05-04",
						usage: { twitter: 10, instagram: 56, facebook: 61 },
					},
				],
			},
			{
				username: "sam_j_1989",
				name: "Sam Jones",
				screenTime: [
					{
						date: "2019-06-11",
						usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
					},
					{
						date: "2019-06-13",
						usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
					},
					{
						date: "2019-06-14",
						usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
					},
				],
			},
		];

		const result = getScreentimeAlertList(data, "2019-05-04");
		const expected = ["beth_1234"];
		expect(result).toStrictEqual(expected);
	});

	test("Should return sam_j_1989 and beth_1234 in an array", () => {
		const data = [
			{
				username: "beth_1234",
				name: "Beth Smith",
				screenTime: [
					{ date: "2019-05-04", usage: { Twitter: 60, Facebook: 80 } },
					{ date: "2019-05-13", usage: { Twitter: 10, LinkedIn: 30 } },
					{ data: "2019-03-12", usage: { Twitter: 5, Reddit: 10 } },
				],
			},
			{
				username: "sam_j_1989",
				name: "Sam Tester",
				screenTime: [
					{
						date: "2019-03-01",
						usage: { twitter: 30, facebook: 90 },
					},
					{
						date: "2019-05-04",
						usage: { twitter: 80, newgrounds: 70 },
					},
				],
			},
		];
		const result = getScreentimeAlertList(data, "2019-05-04");
		const expected = ["beth_1234", "sam_j_1989"];
		expect(result).toStrictEqual(expected);
	});
	test("Should return null", () => {
		const data = [
			{
				username: "beth_1234",
				name: "Beth Smith",
				screenTime: [
					{ date: "2019-05-04", usage: { Twitter: 60, Facebook: 80 } },
					{ date: "2019-05-13", usage: { Twitter: 10, LinkedIn: 30 } },
					{ data: "2019-03-12", usage: { Twitter: 5, Reddit: 10 } },
				],
			},
			{
				username: "sam_j_1989",
				name: "Sam Tester",
				screenTime: [
					{
						date: "2019-03-01",
						usage: { twitter: 30, facebook: 90 },
					},
					{
						date: "2019-05-04",
						usage: { twitter: 80, newgrounds: 70 },
					},
				],
			},
		];
		const result = getScreentimeAlertList(data, "2019-10-04");
		const expected = null;
		expect(result).toStrictEqual(expected);
	});
});

describe("HextoRGB", () => {
	test("should convert hext to RGB", () => {
		const result = hexToRGB("#FF2233");
		const expected = "rgb(255,34,51)";
		expect(result).toBe(expected);
	});

	test("Fix missing # ", () => {
		const result = hexToRGB("342233");
		const expected = "rgb(52,34,51)";
		expect(result).toBe(expected);
	});
});

describe("findWinner", () => {
	test("X Win", () => {
		const board = [
			["X", "0", "0"],
			["0", "X", "0"],
			["X", "0", "X"],
		];
		const result = findWinner(board);
		const expected = "X";
		expect(result).toBe(expected);
	});
	test("O Win", () => {
		const board = [
			["X", "X", "0"],
			["0", "0", "0"],
			["X", "0", "X"],
		];
		const result = findWinner(board);
		const expected = "0";
		expect(result).toBe(expected);
	});
	test("Bad Board", () => {
		const board = [
			["X", "0", "0"],
			["0", "X", "0"],
			["X", "0", "0"],
		];
		expect(() => findWinner(board).toThrow(Error));
	});
});
