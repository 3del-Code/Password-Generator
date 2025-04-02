let passwordbox = document.getElementById("password");
let length = 12;
let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercases = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=";
let allchars = uppercases + lowercases + numbers + symbols;

function generatePassword() {
    let password = "";
    password += uppercases.charAt(Math.floor(Math.random() * uppercases.length));
    password += lowercases.charAt(Math.floor(Math.random() * lowercases.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    while (length > password.length) {
        password += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }
    passwordbox.value = password;
}

function copyPassword() {
    passwordbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    generatePassword();
});