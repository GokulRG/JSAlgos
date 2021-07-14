function isPalindrome(inputString) {

    if (inputString.length <= 1) {
        return true;
    }

    if (inputString.slice(-1) !== inputString.slice(0,1)) {
        return false;
    }

    return isPalindrome(inputString.slice(1,-1));
}


console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));