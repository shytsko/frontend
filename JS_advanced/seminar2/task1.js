// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
    #balance = 0;

    constructor(amount = 0) {
        if (amount < 0)
            throw new Error("Сумма не должна быть отрицательной");
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }

    deposite(amount) {
        if (amount >= 0)
            this.#balance += amount;
        else
            throw new Error("Сумма не должна быть отрицательной");
    }

    withdraw(amount) {
        if (amount < 0)
            throw new Error("Сумма не должна быть отрицательной");

        if (amount > this.#balance)
            throw new Error("На счете нет столько денег");

        this.#balance -= amount;
    }


}

let account = new BankAccount(500);
console.log(account.balance);

account.deposite(200);
console.log(account.balance);

account.withdraw(100);
console.log(account.balance);

try {
    account.deposite(-200);
} catch (error) {
    console.log(error);
}
try {
    account.withdraw(-100);
} catch (error) {
    console.log(error);
}

try {
    account.withdraw(1000);
} catch (error) {
    console.log(error);
}

