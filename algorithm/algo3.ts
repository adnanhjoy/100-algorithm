/*
Give a rectangular matrix of characters, add a border of asterisks(*) to it. 

Example
picture = [“abc”, “ded”]

The output should be
addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]

Input/Output
[time limit] 400ms (js)
[input] array.string picture

Hints
concat()
unshift()
push()

A non-empty array of non-empty equal-length strings.
*/


const addBorder = (picture: string[]) => {
    const wall = '*'.repeat(picture[0].length + 2);
    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }

    return picture;
}

console.log(addBorder(['abc', 'ded']))