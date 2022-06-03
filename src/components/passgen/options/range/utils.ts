export function toPercent(min: number, max: number, val: number): number {
	if ((val < min || val > max) || val < 0) 
		throw Error(`val not in range of (${min}, ${max})`);
	if (min === max)
		return 100;

	const adjMax = max - min;	
	const adjVal = val - min;

	return adjVal * 100 / adjMax;
}
