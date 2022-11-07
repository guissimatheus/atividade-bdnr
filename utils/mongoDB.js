var connect = function connect() {
    const mongoose = require("mongoose");

    mongoose.connect('mongodb://127.0.0.1:27017/');

    mongoose.connection.on('connected', function() {
        console.log('Conexão ao MongoDB realizada com sucesso!');
    });

    mongoose.connection.on('error', function(err) {
        console.log('Database Error: ' + err);
    });
};

module.exports.connect = connect;