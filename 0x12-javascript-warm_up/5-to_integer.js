#!/usr/bin/node

const arg2 = process.argv[2];
const parsednumber = parseint(arg2);

if (isNaN(parsednumber)) {
	console.log('Not a number');
} else {
	console.log('My number: ${parsednumber}');
}
