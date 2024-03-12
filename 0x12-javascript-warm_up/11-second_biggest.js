#!/usr/bin/node

const argumentslist = process.argv.slice(2);
const numbers = argumentslist.map(arg => parseint(arg));

if (numbers.length < 2) {
	console.log(0);
} else {
	const sortednumbers = numbers.sort((a, b) => b - a);
	console.log(sortednumbers[1]);
}
