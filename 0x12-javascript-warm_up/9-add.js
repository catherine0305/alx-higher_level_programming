#!/usr/bin/node

function add (a, b) {
	return a + b;
}

const arg2 = parseint(process.argv[2]);
const arg3 = parseint(process.argv[3]);

const result = add(arg2, arg3);
console.log(result);
