const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Theloai = new Schema({
    id:{type: String,maxLength:225},
    title:{type: String, maxLength:225},
    img:{type: String,maxLength:225},
    createdAt:{type:Date,default: Date.now},
    updateAt:{type:Date,default: Date.now},
});


module.exports = mongoose.model('theloai',Theloai);