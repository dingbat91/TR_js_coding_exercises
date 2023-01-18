import {
	sumMultiples,
	isValidDNA,
	getComplementaryDNA,
	isItPrime,
	createMatrix,
	areWeCovered,
} from "../challenges/exercise006.js";

describe("sumMultiples", () => {
	test("Returns the sum of any numbers that are multiples of 3 or 5", () => {
		const result = sumMultiples([1, 3, 5]);
		const expected = 8;
		expect(result).toBe(expected);
	});

	test("Works with decimals", () => {
		const result = sumMultiples([1, 3, 5.0, 8, 6, 9, 10, 2.3]);
		const expected = 33;
		expect(result).toBe(expected);
	});

	test("Works with negatives", () => {
		const result = sumMultiples([1, 3, 5.0, 8, 6, 9, -10, 2.3]);
		const expected = 13;
		expect(result).toBe(expected);
	});

	test("Works with zero", () => {
		const result = sumMultiples([3, 5, 8, 10, 0, 20]);
		const expected = 38;
		expect(result).toBe(expected);
	});
});

describe("isValidDNA", () => {
	test("Should return true/false depending on whether it is a valid DNA string, C, G, T or A only.", () => {
		const result = isValidDNA("CGTTAAAAGTGTA");
		const expected = true;
		expect(result).toBe(expected);
	});

	test("False on an invalid DNA.", () => {
		const result = isValidDNA("CGTTAABBEEAAGTGTA");
		const expected = false;
		expect(result).toBe(expected);
	});

	test("False if non alphabetical characters are includes", () => {
		const result = isValidDNA("CGTT000@&&;AAAGTGTA");
		const expected = false;
		expect(result).toBe(expected);
	});
	test("Case Sensitive", () => {
		const result = isValidDNA("cgtttaaa");
		const expected = false;
		expect(result).toBe(expected);
	});
});

describe("getComplementaryDNA", () => {
	test("T always pairs with A, and C always pairs with G", () => {
		const result = getComplementaryDNA("TGCA");
		const expected = "ACGT";
		expect(result).toBe(expected);
	});
	test("Incorrect DNA String", () => {
		const result = getComplementaryDNA("TGCF");
		const expected = null;
		expect(result).toBe(expected);
	});
	test("Non alphabetical Character included", () => {
		const result = getComplementaryDNA("TGC3");
		const expected = null;
		expect(result).toBe(expected);
	});
});

describe("isItPrime", () => {
	test("Returns true if prime", () => {
		const result = isItPrime(7);
		const expected = true;
		expect(result).toBe(expected);
	});
	test("Returns false if not prime", () => {
		const result = isItPrime(6);
		const expected = false;
		expect(result).toBe(expected);
	});
	test("Returns false if not number", () => {
		const result = isItPrime("A");
		const expected = false;
		expect(result).toBe(expected);
	});
});

describe("createMatrix", () => {
	test('should  create a 3x3 matrix of "foo"', () => {
		const result = createMatrix(3, "foo");
		const expected = [
			["foo", "foo", "foo"],
			["foo", "foo", "foo"],
			["foo", "foo", "foo"],
		];
		expect(result).toStrictEqual(expected);
	});

	test("should create a 2x2 matrix containing 13", () => {
		const result = createMatrix(2, 13);
		const expected = [
			[13, 13],
			[13, 13],
		];
		expect(result).toStrictEqual(expected);
	});
});

describe("areWeCovered", () => {
	test("should return true", () => {
		const testdata = [
			{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
			{ name: "Judith", rota: ["Monday", "Wednesday", "Wednesday"] },
			{ name: "Steven", rota: ["Monday", "Wednesday", "Friday"] },
		];
		const result = areWeCovered(testdata, "Wednesday");
		const expected = true;
		expect(result).toBe(expected);
	});

	test("should return false", () => {
		const testdata = [
			{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
			{ name: "Judith", rota: ["Monday", "Wednesday", "Wednesday"] },
			{ name: "Steven", rota: ["Monday", "Wednesday", "Friday"] },
		];
		const result = areWeCovered(testdata, "Friday");
		const expected = false;
		expect(result).toBe(expected);
	});
	test("case Insensitive to day", () => {
		const testdata = [
			{ name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
			{ name: "Judith", rota: ["Monday", "Wednesday", "Wednesday"] },
			{ name: "Steven", rota: ["Monday", "Wednesday", "Friday"] },
		];
		const result = areWeCovered(testdata, "wednesday");
		const expected = true;
		expect(result).toBe(expected);
	});
});
