/*
Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

Example
For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

Input/Output
[time limit] 400ms (js)
[input] array.integer inputArray
*/


const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number) => {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);