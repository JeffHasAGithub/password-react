const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "123456789";
const SYMBOLS = "!#@&%^*$";

export function getRandChar(chars: string): string {
	if (chars.length === 0)
		return "";

	return chars[Math.floor(Math.random() * chars.length)];
}

export function genPassword(length: number, ...options: string[]): string {
	let result: string[] = Array(length);

	for (let i = 0; i < length; i++) {
		result[i] = getRandChar(options[i % options.length]);
	};

	return result.join("");
}
