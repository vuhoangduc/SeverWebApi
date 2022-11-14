const Course = require('../models/Course');
const theloaii = require('../models/theloai');
const {mutipleMongooseToObject} = require('../../util/mongooes');
class NewControler {


    index(req,res){
        Course.find({}, function(err,couses) {
            if (!err) {
                
                // res.render('new',{couses : mutipleMongooseToObject(couses)});
                console.log(couses);
                res.json(couses);
            }else{
                console.log("ERROR!!!")
            }
        });
    }


    show(req,res){
        res.send('Thong luoi choi game ca ngày');
    }
}

module.exports = new NewControler;

