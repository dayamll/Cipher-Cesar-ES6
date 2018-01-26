// Declaracion de variables ...

let btnCipher = document.getElementById('cipherMessage');
let btnDescipher = document.getElementById('decipherMessage');
let inputMessage = document.getElementById('inputMessage');
let inputMessage2 = document.getElementById('inputMessage2');
let showMessage = document.getElementById('showCipher');

// // const start = prompt('Enter your Message!!!');
// // Creando funcion para el cifrado del mensaje por medio del codigo ascii!
btnCipher.addEventListener('click', cipher);

function cipher() {
  let cipherMessage = '';
  let message = inputMessage.value;
  const number = 33;
  for (i = 0; i < message.length; i++) {
    let ascii = message[i].charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) // Mayusculas A = 65  Z = 90
      cipherMessage += String.fromCharCode((ascii - 65 + number) % 26 + 65); 
    else if (ascii >= 97 && ascii <= 122)// Minusculas a = 97  z = 122
      cipherMessage += String.fromCharCode((ascii - 97 + number) % 26 + 97); 
  }
  showMessage.innerHTML = `<p> Ciphered word: ${cipherMessage} </p>`;
}

// // Creando segunnda funcion para el decifrado del mensaje por medio del codigo ascii!
btnDescipher.addEventListener('click', descipher);

function descipher() {
  let decipherMessage = '';
  let message2 = inputMessage2.value;
  for (i = 0; i < message2.length; i++) {
    let ascii = message2[i].charCodeAt(0);
    const number = 33;
    if (ascii >= 65 && ascii <= 90) // Mayusculas A = 65  Z = 90
      decipherMessage += String.fromCharCode((ascii - 65 - number + 26 * 2) % 26 + 65);
    else if (ascii >= 97 && ascii <= 122) // Minusculas a = 97  z = 122
      decipherMessage += String.fromCharCode((ascii - 97 - number + 26 * 2) % 26 + 97);
  }
  showMessage.innerHTML = `<p> Deciphered word: ${decipherMessage} </p>`;
}

// Funcion para limpiar el historial del texto ingresado!!

let clearText = () => {
  inputMessage.value = '';
  inputMessage2.value = '';
  showMessage.textContent = '';
};
clear.addEventListener('click', clearText);