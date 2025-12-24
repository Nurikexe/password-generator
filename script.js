
function generatePassword(){
    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const userPassword = document.getElementById("passwordOutput");
    const passwordLength = document.getElementById("length").value;

    const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersArray = "01234567890";
    const symbolsArray = "!_?*&^%$#~";

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += lowerCase.checked ? lowerCaseArray : "";
    allowedCharacters += upperCase.checked ? upperCaseArray : "";
    allowedCharacters += numbers.checked ? numbersArray : "";
    allowedCharacters += symbols.checked ? symbolsArray : "";

    for(let i = 0; i < passwordLength; i++ ){
        let random = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[random];
    }
    userPassword.value = password;
}

