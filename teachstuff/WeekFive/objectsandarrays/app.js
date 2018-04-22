'use strict';
/*
	First figure out how to force a program to end.

	Mac: cmd + option + esc
	PC: cntrl + alt + del



// While loops check whether a condition is true and then perform a task as long as 
// the condition is true.
// ****WARNING**** THE BELOW WHILE LOOP IS AN INFINITE LOOP.

while (true) {
	// some task
	// something to prevent the condition from running infinitely
}
*/


// Loops are useful for performing tasks without having to
// write the same code multiple times.

// Let's say I want to alert numbers 0-5. I could write 5 lines to log it. But that's inconvenient.
alert(0);
alert(1);
alert(2);
alert(3);
alert(4);
alert(5);


// Here's how to write 0-5 with a loop.
var count = 0;

while (count <= 5) {
	alert(count);
	count = count + 1; // prevents infinite loop.
}


// With the loop below we'll take a list of contacts and loop through each value and create a <p> element
// containing the element.
var contactList = ['Magic Johnson', 'Kareem', 'Kobe', 'Shaq', 'D Fish'];
var count = 0;

while (count < contactList.length) {
	document.write('<li>' + contactList[count] + '</li>');
	count = count + 1;
}

let coun = 0

while (coun <= 1) {
	alert(coun)
	coun++
}

let list = ['red', 'blue', 'yellow', 'brown', 'green'];

while (coun < list.length) {
	document.write('<p>' + list[coun] + '<p>');
	coun++
}

var cou = 0;

while (cou <= 5) {
	alert(cou);
	cou = cou + 1;
}

var contactList = ['Magic Johnson', 'Kareem', 'Kobe', 'Shaq', 'D Fish'];
var cou = 0;

while (cou < contactList.length) {
	document.write('<li>' + contactList[cou] + '</li>');
	cou = cou + 1;
}