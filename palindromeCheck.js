/**
 * 
 * Sample program to check if the given text is a palindrome or not
 */

function palindromeCheck(targetText) {

    let actualText = targetText.toLowerCase().split(''); // using toLowercase to convert the string to lower case & split to split the string

    let caseConvertedText = actualText.join('') //use join method to join the string again

    let reversalText = actualText.reverse().join(''); //use reverse to reverse the sting data

    if (caseConvertedText === reversalText) // Condition to check 
    {
        console.log(`The given text '${targetText}' is  a palindrome`);
    }

    else { console.log(`The given text '${targetText}' is not a palindrome`); }
}

palindromeCheck("Text")

palindromeCheck("MalaYalam")