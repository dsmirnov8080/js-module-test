import capitalize from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };