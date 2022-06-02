export const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LOWER = "abcdefghijklmnopqrstuvwxyz";
export const NUMBERS = "123456789";
export const SYMBOLS = "!#@&%^*$";

export function getRandChar(chars: string): string {
	if (chars.length === 0)
		return "";

	return chars[getRandRange(0, chars.length)];
}

export function genPassword(length: number, ...options: string[]): string {
	if (options.length === 0)
		return "";

	let result: string[] = Array(length);

	for (let i = 0; i < length; i++) {
		result[i] = getRandChar(options[i % options.length]);
	};

	return result.join("");
}

export function setOptions(alphaUpp: boolean, alphaLow: boolean, nums: boolean, syms: boolean): string[] {
	const options = [];

	if (alphaUpp)
		options.push(UPPER);
	if (alphaLow)
		options.push(LOWER);
	if (nums)
		options.push(NUMBERS);
	if (syms)
		options.push(SYMBOLS);

	return options;	
}

export function getRandRange(min: number, max: number): number {
	if (max <= min) throw Error("getRandRange: max < min");

	return Math.floor(Math.random() * (max - min)) + min;
}
