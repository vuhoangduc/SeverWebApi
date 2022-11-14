const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Thong_ngu_dev');
        console.log('Connect success!!!');
    } catch (error) {
        console.log('Connect false!!!');
    }
}
module.exports = {connect};


