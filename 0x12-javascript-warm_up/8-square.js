#!/usr/bin/node

const squaresize = process.argv[2];
const mysquare = parseint(squaresize);
const x = 'x';

if (isNaN(mysquare)) {
	console.log('Missing size');
} else {
	for (let i = 0; i < mysquare; i++); {
		console.log(x.repeat(mysquare));
	}
}
