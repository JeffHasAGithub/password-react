import { screen, render } from "@testing-library/react"
import * as Utils from "../utils/genpassword"

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "123456789";
const SYMBOLS = "!#@&%^*$";

describe("getRandChar", () => {
	test("returns value in range", () => {
		for (let i = 0; i < 50; i++) {
			const result = Utils.getRandChar(UPPER);
			expect(result.length).toBeLessThan(UPPER.length);
			expect(result.length).toBeGreaterThanOrEqual(0);
		}
	});

	test("Handles empty string", () => {
		expect(Utils.getRandChar("")).toEqual("");
	});
});

describe("getRandRange", () => {
	test("returns random number in range of (min, max]", () => {
		for (let i = 0; i < 50; i++) {
			for (let j = i + 1; j < 50; j++) {
				const result = Utils.getRandRange(i, j);
				expect(result).toBeLessThan(j);
				expect(result).toBeGreaterThanOrEqual(i);
			}
		}
	});

	test("throws exception if max <= min", () => {
		const fn = () => Utils.getRandRange(3, 2);
		expect(() => fn()).toThrow("getRandRange: max < min");
	});
});

describe("genPassword", () => {
	const table = [
		[UPPER, LOWER, NUMBERS, SYMBOLS],
		[UPPER, LOWER],
		[SYMBOLS],
		[LOWER, NUMBERS],
	]

	const [min, max] = [8, 24];

	test.each(table)("returns string of specified length", (inputs) => {
		const randLen = Utils.getRandRange(min, max);
		const result = Utils.genPassword(randLen, ...inputs);
		expect(result).toHaveLength(randLen);
	});

	test("returns empty string if no options are passed as args", () => {
		const randLen = Utils.getRandRange(min, max);
		const result = Utils.genPassword(randLen);
		expect(result).toEqual("");
	});

	test("returns empty string if length === 0", () => {
		const result = Utils.genPassword(0, UPPER, LOWER);
		expect(result).toEqual("");
	});
});
