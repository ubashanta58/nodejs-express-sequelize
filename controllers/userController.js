var db = require('../models');
const Users = db.users;

const {Sequelize} = require('sequelize');

var addUser = async (req, res) => {

    // let data = await Users.build({
    //     name:'Test',
    //     email:'test2@gmail.com'
    // });
    // await data.save();
    //insert
    let data = await Users.create({
            name:'demo3',
            email:'test35@gmail.com'
        });
    
    //update
    // data.name = 'dummy';
    // data.save();

    //delete
    // data.destroy();

    //reload
    // data.name = 'dummy';
    // data.reload();
    // data.save();

    console.log(data.dataValues);

    let response = {
        data:'ok'
    }

    res.status(200).json(response);
}

var crudOperation = async (req, res) =>{

    //insert
    // let data = await Users.create({
    //     name:'demo3',
    //     email:'test35@gmail.com',
    //     gender:'male'
    // });
    // console.log(data.id)

    //update
    // let data = await Users.update({
    //         name:'final'
    //     },{
    //         where: {
    //             id:16
    //         }
    //     });

    //delete
    // let data = await Users.destroy({
    //     where: {
    //         id:16
    //     }
    // });

    //truncate
    // let data = await Users.destroy({
    //     truncate: true
    // });

    //bluk insert
    // let data = await Users.bulkCreate([
    //     {
    //         name:'demo1',
    //         email:'test35@gmail.com',
    //         gender:'male'
    //     },
    //     {
    //         name:'demo2',
    //         email:'test35@gmail.com',
    //         gender:'male'
    //     },
    //     {
    //         name:'demo3',
    //         email:'test35@gmail.com',
    //         gender:'male'
    //     },
    //     {
    //         name:'demo4',
    //         email:'test35@gmail.com',
    //         gender:'male'
    //     },
    //     {
    //         name:'demo5',
    //         email:'test35@gmail.com',
    //         gender:'male'
    //     }
    // ])

    //find
    let data = await Users.findOne({});
    

    let response = {
        data: data
    }
    res.status(200).json(response);
}

var queryData = async (req, res) => {

    //insert selected fields into data base.
    // let data = await Users.create({name:'demolast1', email:'demolast1@email.com', gender: 'male'},{
    //     fields:['name','email']
    // });

    //select
    //findAll({}) finds all data findOne({}) finds one
    //  

    // let data = await Users.findAll({
    //     attributes:{
    //         exclude:['email', 'gender'],
    //         include: [
    //             [Sequelize.fn('CONCAT', Sequelize.col('name'), ' Prasad'), 'fullName']
    //         ]
    //     }
    // })

    //condition
    let data = await Users.findAll({
        where: {
            id:2
        }
    })

    let response = {
        data: data
    }
    res.status(200).json(response);
}

var finderData = async (req, res) =>{

    // let data = await Users.findAll({});
    // let data = await Users.findOne({});
    //let data = await Users.findByPk(7);
    //  let data = await Users.findAndCountAll({
    //      where: {
    //          email: 'test35@gmail.com'
    //      }
    //  });

    let [data, created] = await Users.findOrCreate({
        where: {
            name: 'shyam'
        },
        defaults: {
            email:'emaildemo1@email.com',
            gender: 'male'
        }
    })
    let response = {
        data: data,
        add: created
    }

    res.status(200).json(response);
}



module.exports = {
    addUser,
    crudOperation,
    queryData,
    finderData
}