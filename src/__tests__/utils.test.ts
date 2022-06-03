import * as PWUtils from "../components/passgen/utils"
import * as RangeUtils from "../components/passgen/options/range/utils"

///////////////////////////////////////////////////////////////////////

describe("Password Utils", () => {
	const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const LOWER = "abcdefghijklmnopqrstuvwxyz";
	const NUMBERS = "123456789";
	const SYMBOLS = "!#@&%^*$";

	describe("getRandChar", () => {
		test("returns value in range", () => {
			for (let i = 0; i < 50; i++) {
				const result = PWUtils.getRandChar(UPPER);
				expect(result.length).toBeLessThan(UPPER.length);
				expect(result.length).toBeGreaterThanOrEqual(0);
			}
		});

		test("Handles empty string", () => {
			expect(PWUtils.getRandChar("")).toEqual("");
		});
	});

	describe("getRandRange", () => {
		test("returns random number in range of (min, max]", () => {
			for (let i = 0; i < 50; i++) {
				for (let j = i + 1; j < 50; j++) {
					const result = PWUtils.getRandRange(i, j);
					expect(result).toBeLessThan(j);
					expect(result).toBeGreaterThanOrEqual(i);
				}
			}
		});

		test("throws exception if max <= min", () => {
			const fn = () => PWUtils.getRandRange(3, 2);
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
			const randLen = PWUtils.getRandRange(min, max);
			const result = PWUtils.genPassword(randLen, ...inputs);
			expect(result).toHaveLength(randLen);
		});

		test("returns empty string if no options are passed as args", () => {
			const randLen = PWUtils.getRandRange(min, max);
			const result = PWUtils.genPassword(randLen);
			expect(result).toEqual("");
		});

		test("returns empty string if length === 0", () => {
			const result = PWUtils.genPassword(0, UPPER, LOWER);
			expect(result).toEqual("");
		});
	});
});

//////////////////////////////////////////////////////////////////////

describe("Range Utils", () => {
	describe("toPercent", () => {
		test("Returns 0% when val === min", () => {
			expect(RangeUtils.toPercent(8, 16, 8)).toEqual(0);
		});

		test("Returns 50% when val === (max + min) / 2", () => {
			expect(RangeUtils.toPercent(8, 16, 12)).toEqual(50);
		});

		test("Returns 100% when val === max", () => {
			expect(RangeUtils.toPercent(8, 16, 16)).toEqual(100);
		});

		test("returns 100% when min === max === val", () => {
			expect(RangeUtils.toPercent(5, 5, 5)).toEqual(100);
		});

		test("Throws when val < 0")

		test("Throws when value > max || value < min", () => {
			expect(() => RangeUtils.toPercent(10, 50, 9)).toThrow();
			expect(() => RangeUtils.toPercent(2, 4, 5)).toThrow();
		});
	});
});
