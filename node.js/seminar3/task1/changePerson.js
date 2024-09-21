const fs = require('fs');
const path = require('path');

const pahtFile = path.join(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(pahtFile, 'utf-8'));

console.log(person);

person.age -= 10;
person.city = "Ekaterinburg";

fs.writeFileSync(pahtFile, JSON.stringify(person, null, 2));