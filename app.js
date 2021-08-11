document.getElementById("btn").addEventListener("click", function(){
    let text = document.getElementById("input").value;
    console.log(text);
    checkPalindrome(text);
});
function checkPalindrome(text){
let word = text.replace(/[^a-zA-Z0-9]/g,  '').toLowerCase();
console.log(text,word);
let len = word.length;
let half = Math.floor(len/2);
let result = document.getElementById("result");


for (let i=0; i<half; i++){
    if(word[i] !== word[len-1-i]){
        result.textContent = "NO! This word is not palindrome.";
        return;
    }
    result.textContent = "OH YES! Given word is palindrome."
}
}
