#!/usr/bin/node

const firstarg = process.argv[2];

if (firstarg) {
	console.log(firstarg);
} else {
	console.log('No argument');
}
