const inputBox = document.getElementById("inputBox");
const theButt = document.getElementById("butt");
const outputBox = document.getElementById("outputBox");
outputBox.innerHTML = "";
var testString = "jabroni";

function reversal(str) {
    let newStr = str.split("");
    let newnewStr = newStr.reverse();
    let newnewnewStr = newnewStr.join("");
    console.log("in reversal function, reversed: ", newnewnewStr);
    outputBox.innerHTML += `<hr>Reversed: ${newnewnewStr}`;
}

function alphabits(str) {
    let newStr = str.split("");
    let newnewStr = newStr.sort();
    outputBox.innerHTML += `<br>Alphabetical order: ${newnewStr}`;
}

function palindrome(str) {
    console.log("str, beginning of 'palindrome' function: ", str);
    let aryStr = str.split("");
    console.log("split string: ", aryStr);

    let revAryStr = aryStr.reverse();
    console.log("reversed, array: ", revAryStr);

    let revStr = revAryStr.join("");
    console.log("reversed, string: ", revStr);
    if (revStr === str){
        outputBox.innerHTML += `<br><span style="color:red;font-size:1.2em;">Your word, ${str}, is a palindrome, as hell, my dude!! Shit fuggin hell right!!</span>`;
    } else {
        outputBox.innerHTML +=`<br>Your word, ${str},  is definitely fucking not a god damn palindrome at all!!!!`;
    }
    inputBox.value = "";
    inputBox.focus();
}

inputBox.addEventListener("keyup", function() {
    if (event.keyCode === 13) {
        testString = inputBox.value;
        testString = testString.toLowerCase();
        reversal(testString);
        alphabits(testString);
        palindrome(testString);
    }

});

theButt.addEventListener("click", function(){
    testString = inputBox.value;
    testString = testString.toLowerCase();
    reversal(testString);
    alphabits(testString);
    palindrome(testString);

});