const age = Number(prompt('Ваш возраст'));
let msg = "";

if (age < 0) {
    msg = 'Ввели неверное значение';
} else if (age < 10 || age > 20) {
    msg = `Вам ${age} `;
    const lastDigit = age % 10;
    if(lastDigit === 1) {
        msg += 'год';
    } else if (lastDigit >=2 && lastDigit <=4) {
        msg += 'года';
    } else {
        msg += 'лет';
    }
} else {
    msg = `Вам ${age} лет`;
}

alert(msg);

const userName = prompt('Ваше имя');
alert(`Добро пожаловать на сайт, ${userName}`);
