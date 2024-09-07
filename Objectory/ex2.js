/* 
Задачи:
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings, которая будет принимать в себя
массив строк и будет выводить в консоль эти строки в нижнем регистре.
Пример:
standardizeStrings(favoriteCities)  выведет в консоль
    lisbon
    rome
    milan
    dublin
*/

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  // my code part
  let familyMembers = "Семья состоит из: ";

  if (arr.length > 0) {
    arr.forEach((element) => {
      familyMembers += `${element} `;
    });
  } else {
    return "Семья пуста";
  }

  return familyMembers;
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  // my code part
  let standardStrings = "";

  arr.forEach((element) => {
    standardStrings += element.toLowerCase() + "\n";
  });

  return standardStrings;
}

console.log(showFamily(family)); // v
console.log(standardizeStrings(favoriteCities)); // v
