/*
  Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
Пример:
    personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'
 */

//code base
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    // my part
    showAgeAndLangs(self) {
        const {skills: {languages}} = self;
        let knownLanguages = '';
        for (let key in languages) {
            knownLanguages += `${languages[key]} `.toUpperCase();
        }
        return `Мне ${self.age} и я владею языками: ${knownLanguages}`
    }
};

function showExperience(plan) {
    // my part
    const {skills: {exp}} = plan;
    return exp; 
}

function showProgrammingLangs(plan) {
    // my part
    const {skills: {programmingLangs}} = plan;
    let langsProgress = '';

    if (Object.keys(programmingLangs).length !== 0) {
        for (let key in programmingLangs) {
            langsProgress += `Язык ${key} изучен на ${programmingLangs[key]}\n`
        }
    } else {
        return langsProgress = '';
    }

    return langsProgress;
}