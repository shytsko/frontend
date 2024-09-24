// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ

class User {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

class RegularUser extends User {

}

class PremiumUser extends User {
    premiunAccount = new Date().setFullYear(2025);

    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.premiunAccount = new Date();
        this.premiunAccount.setFullYear(this.premiunAccount.getFullYear() + 1);
    }

}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        console.log("Пользователь c премиум аккаунтом");
        const premiumDateEnd = user?.premiunAccount;
        if (premiumDateEnd) {
            console.log(`Срок действия премиум аккаунта ${premiumDateEnd}`);
            if (premiumDateEnd < new Date()) {
                console.log("Срок действия премиум аккаунта истек");
            } else {
                console.log("Премиум аккаунт действует");
            }
        }
    } else if (user instanceof RegularUser) {
        console.log("Пользователь без премиум аккаунта");
    } else {
        console.log("Не известный тип пользователя");
    }
}



const user = new PremiumUser("user", "user");
console.log(user);
getAccountInfo(user);