const mongoose = require('mongoose');

let db = 'EmpleosDB';
let port = '27017';
let host = 'localhost';

class Database {
    constructor () {
            mongoose.connect(`mongodb+srv://prueba:asd.456@cluster0.xb8um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true})
            .then(result => console.log(`Se conectó a MongoDB`))
            .catch(error => console.log(error));
        }
}

module.exports = new Database();