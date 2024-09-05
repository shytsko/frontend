// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и
// использует fetch для отправки этих данных на удаленный сервер для сохранения.Функция должна возвращать
// промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.


const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

async function saveUserData(newUser) {
    const response = await fetch("https://jsonplaceholder.org/users",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newUser)
        });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to save user data.");
    }
}

saveUserData(user)
    .then((user) => {
        console.log(user);
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });