const pool = require("../../config/database");

module.exports = {
    create: (data, callBack)=>{
        pool.query(`insert into product(name, description, price, image, maintain_cost)
                    values(?,?,?,?,?)`,
                    [
                        data.name,
                        data.desc,
                        data.price,
                        data.imageK,
                        data.maintainCost
                    ],
                    (error,results,fields)=>{
                        if(error){
                            return callBack(error);
                        }
                        return callBack(null,results);
                    } 
        )},
    getAllProduct: callBack=>{
        pool.query(`select id, name, description, price, image, maintain_cost from product`,
        [],
        (error,results,fields)=>{

            console.log(results);
            if(error) return callBack(error);
            return callBack(null, results);
        }
        )},
    updateProduct: (data,callBack)=>{
        pool.query(
            `update product set name=?, description=?, price=?, maintain_cost=? where id = ?`,
            [
            data.name,
            data.description,
            data.price,
            data.id,
            data.maintainCost
        ],
        (error,results,fields)=>{
            if(error) return callBack(error);
            return callBack(null, results[0]);
        });
    },
    deleteProduct: (data,callBack)=>{
        pool.query(`delete from product where id=?`,
        [data.id],
        (error,results,fields)=>{
            console.log("error",error);
            console.log("results",results);
            if(error) return callBack(error);
            return callBack(null,results);
        });
    }
};  