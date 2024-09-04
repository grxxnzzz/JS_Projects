"use strict";

const HEIGHT = 12;
let pyr = '';

for (let i = 0; i < HEIGHT; i++) {

    for (let j = HEIGHT; j > i; j--) {
        pyr += ' ';
    }

    for (let k = 1; k < i*2; k++) {
        pyr += '*';
    }

    pyr += '\n';
}

console.log(pyr);