/* global document, window, setTimeout */

const commandString = '> access main security grid\n';
const outputString = 'access: PERMISSION DENIED....and...\n';
const alertString = "YOU DIDN'T SAY THE MAGIC WORD!\n";

var pre = document.querySelector('pre');

function printAlert() {
  if (pre.clientHeight < window.innerHeight) {
    pre.innerHTML += alertString;
    setTimeout(printAlert, 100);
  }
}

function printOutput() {
  var pre_len = pre.innerText.length - commandString.length;
  if (pre_len < outputString.length) {
    pre.innerHTML += outputString.charAt(pre_len);
    setTimeout(printOutput, 20);
  } else {
    setTimeout(printAlert, 2000);
  }
}

function printCommand() {
  var pre_len = pre.innerText.length;
  if (pre_len < commandString.length) {
    pre.innerHTML += commandString.charAt(pre_len);
    setTimeout(printCommand, 200);
  } else {
    setTimeout(printOutput, 1000);
  }
}

printCommand();
