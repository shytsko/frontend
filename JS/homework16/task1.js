// Получение данных о пользователе

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и
// использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна
// возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с
// указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.


async function getUserData(userID) {
    const response = await fetch(`https://jsonplaceholder.org/users/${userID}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("User not found");
    }
}


getUserData(30)
    .then(user => console.log(user))
    .catch(err => console.log(err));


