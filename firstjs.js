'use strict';

let money = prompt('Ваш бюджет на месяц', '50000');
console.log('Бюджет на месяц '+ money);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-20');
console.log('Сегодня ' + time);
let rashodiKey = prompt('Введите обязательную статью расходов в этом месяце', 'За питание');
let rashodiZnach = prompt('Во сколько обойдется?', '20000');
let appData = {
    budjet: [money],
    timeData: [time],
    expenses: {
        [rashodiKey]: [rashodiZnach]
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData);


let oneDayBudjet = alert('Ваш буджет на 1 день: ' + money/30);
console.log('В день можно тратить ' + money/30);

