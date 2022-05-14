const mongoose = require('mongoose');

exports.connect = function ({
    protocol = 'mongodb',
    url = '',
    username,
    password
}){
    let dburl = '';
    if(username && password){
        dburl =`${protocol}://${username}:${password}@${url}`
    }
    else{
        dburl = `${protocol}://${url}`
    }

    mongoose.connect(dburl);

    mongoose.connection.on('open',function(){
        console.log('Conectada');
    });

    mongoose.connection.on('close',function(){
        console.log('Desconectada');
    });

    mongoose.connection.on('error',function(error){
        console.log(error);
    });
};

exports.disconnect = function(){
    mongoose.disconnect.close();
};