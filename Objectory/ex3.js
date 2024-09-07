"use strict";

const someString = "This is some strange string";

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    }
    let reversed = str.split(" ").reverse();

    reversed = reversed
        .map((word) => word.split("").reverse().join(""))
        .join(" ");

    return reversed;
}

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
    let currencies = "Доступные валюты:\n";

    if (arr.length === 0) {
        return "Нет доступных валют";
    } else {
        for (let currency in arr) {
            if (arr[currency] === missingCurr) {
                delete arr[currency];
            } else {
                currencies += `${arr[currency]}\n`;
            }
        }
        return currencies;
    }
}

console.log(reverse(someString));
console.log(availableCurr(baseCurrencies, "USD"));
