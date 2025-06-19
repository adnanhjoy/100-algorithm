/*
Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

#Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

#Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/



function defangIPaddr(address: string) {
    const strArr = address.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '.') {
            strArr[i] = '[.]'
        };
    };

    return strArr.join('');
};


console.log(defangIPaddr("1.1.1.1"))