const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number) => {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);