export function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
	}

export default function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
	}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
	}