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


describe("genPassword", () => {
	const table = [
		[UPPER, LOWER, NUMBERS, SYMBOLS],
		[UPPER, LOWER],
		[SYMBOLS],
		[LOWER, NUMBERS],
	]

	const [min, max] = [8, 24];

	test.each(table)("returns string of specified length", (inputs) => {
		const randLen = Math.floor(Math.random() * max - min) + min;
		const result = Utils.genPassword(randLen, ...inputs);
		expect(result).toHaveLength(randLen);
	});
});
