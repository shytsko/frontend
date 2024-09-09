// У вас есть список задач, которые необходимо выполнить в определенном порядке.
// Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах.
// Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую
// задачу через определенный промежуток времени.

const tasks = [
    { name: 'task 1', time: 1000 },
    { name: 'task 2', time: 2000 },
    { name: 'task 3', time: 3000 },
    { name: 'task 4', time: 4000 },
    { name: 'task 5', time: 5000 }
];

function runTasks(tasks, interval) {
    let timeStart = 0;
    tasks.forEach(task => {
        setTimeout(() => {
            console.log(`Task '${task.name}' started`);
            setTimeout(() => console.log(`Task '${task.name}' done`), task.time)
        }, timeStart);
        timeStart += task.time + interval;
    });
}

runTasks(tasks, 2000);