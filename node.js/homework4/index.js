const express = require('express');
const { shemaUserID, shemaUserInput } = require('./validation/shemas');
const { checkUserID, checkUserInputData } = require('./validation/validators');
const UsersFileRepository = require('./repositories/usersFileReposirory');
const path = require('path');

const usersRepository = new UsersFileRepository(path.join(__dirname, 'user_data.json'));

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({ users: usersRepository.getAllUsers() });
})

app.get('/users/:id', checkUserID(shemaUserID), (req, res) => {
    const user = usersRepository.getUserByID(Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404).send({ user: null });
    }
})

app.post('/users', checkUserInputData(shemaUserInput), (req, res) => {
    const newUserID = usersRepository.addUser(req.body);
    res.send({ id: newUserID });
})

app.put('/users/:id', checkUserID(shemaUserID), checkUserInputData(shemaUserInput), (req, res) => {
    const user = usersRepository.updateUser(Number(req.params.id), req.body);

    if (user) {
        res.send({ user });
    } else {
        res.status(404).send({ user: null });
    }
})

app.delete('/users/:id', checkUserID(shemaUserID), (req, res) => {
    const user = usersRepository.deleteUser(Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404).send({ user: null });
    }
})

app.use((req, res) => {
    res.status(404).send({ message: "URL not found!" })
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})