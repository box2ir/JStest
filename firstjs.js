let money = +prompt('Ваш бюджет на месяц', '50000'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-20');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Ваш буджет на 1 день: ' + appData.budjet/30);

// for(let i = 0; i < 2; i ++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'За питание'),
//         b = prompt('Во сколько обойдется?', '20000');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null
//     && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         appData.expenses[a] = b;
//     } else {

//     }
// }

//Вариант с циклом while
// let i = 0;
// while(true) {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'За питание'),
//         b = prompt('Во сколько обойдется?', '20000');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null
//     && a != '' && b != '' && a.length < 50 && b.length < 50) {
//          appData.expenses[a] = b;
//         } else {

// }
//     if(i >= 2) {
//         break;
//     }
// }

//Вариант с циклом do while
let i = 0;
do {
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'За питание'),
        b = prompt('Во сколько обойдется?', '20000');
    if( (typeof(a)) === 'string' && (typeof(a)) != null
    && a != '' && b != '' && a.length < 50 && b.length < 50) {
         appData.expenses[a] = b;
        } else {

}
} while(i <=2);


appData.moneyPerDay = appData.budjet/30;
alert('Ваш буджет на 1 день: ' + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Бюджет на день менее 100 руб");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2001) {
    console.log("Бюджет на день от 100 до 2000");
} else if(appData.moneyPerDay > 2000) {
    console.log("Бюджет на день более 2000 руб");
} else {
    console.log("Произошла ошибка");
};