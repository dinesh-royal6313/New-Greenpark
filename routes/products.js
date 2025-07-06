// const express=require('express');
// const products = express.Router();
// const pool=require('../shared/pool');

// products.get('/',(req,res) => {
//     var mainCategoryId = req.query.maincategoryid;
//     var subCategoryId = req.query.subcategoryid;

//     let query = 'select * from products';
//     if(subCategoryId){
//         query+= ' where category_id ='+subCategoryId;
//     }

//     if(mainCategoryId){
//         query = 'select products.* from products, categories where products.category_id = categories.id and categories.parent_category_id = ${mainCategoryId}';
//     }
//     pool.query(query, (error,products) => {
//         if(error){
//             res.status(500).send(error);
//         }else{
//             res.status(200).send(products);
//         }
//     });
// });

// products.get('/(:id)',(req,res) => {
//     let id = req.params.id;
//     pool.query('select * from products where id = '+id,(error,products) => {
//         if(error){
//             res.status(500).send(error);
//         }else{
//             res.status(200).send(products);
//         }
//     })
// })

// module.exports = products;
  


//--------------------------from this the code is correct-------------------
const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req, res) => {
    console.log('Received query params:', req.query);

    // const mainCategoryId = req.query.maincategoryid;
    // const subCategoryId = req.query.subcategoryid;
    const mainCategoryId = req.query.maincategoryid || req.query.mainCategoryid;
    const subCategoryId = req.query.subcategoryid || req.query.subCategoryid;
    const keyword = req.query.keyword;

    let query = 'SELECT * FROM products';
    let queryParams = [];

    // if (subCategoryId) {
    //     query += ' WHERE category_id = ?';
    //     queryParams.push(subCategoryId);
    // }

    // if (mainCategoryId) {
    //     query = `
    //         SELECT products.* 
    //         FROM products 
    //         JOIN categories ON products.category_id = categories.id 
    //         WHERE categories.parent_category_id = ?
    //     `;
    //     queryParams = [mainCategoryId];
    // }
    if (subCategoryId && mainCategoryId) {
        query = `
            SELECT products.* 
            FROM products 
            JOIN categories ON products.category_id = categories.id 
            WHERE categories.parent_category_id = ? AND products.category_id = ?
        `;
        queryParams.push(mainCategoryId, subCategoryId);
    } else if (subCategoryId) {
        query += ' WHERE category_id = ?';
        queryParams.push(subCategoryId);
    } else if (mainCategoryId) {
        query = `
            SELECT products.* 
            FROM products 
            JOIN categories ON products.category_id = categories.id 
            WHERE categories.parent_category_id = ?
        `;
        queryParams.push(mainCategoryId);
    }
    if (keyword){
        query += `and keywords like '%${keyword}%'`; 
    }
    console.log('Executing SQL:', query, 'with params:', queryParams); // ✅ Debug SQL query

    pool.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('SQL Error:', error);
            return res.status(500).json(error);
        }
        res.status(200).json(results);
    });
});

products.get('/:id', (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('SQL Error:', error);
            return res.status(500).json(error);
        }
        res.status(200).json(results);
    });

});


module.exports = products;

// const express = require('express');
// const products = express.Router();
// const pool = require('../shared/pool');
// products.get('/', (req, res) => {
//     const mainCategoryId = req.query.maincategoryid;
//     const subCategoryId = req.query.subcategoryid;

//     let query = 'SELECT * FROM products';
//     let queryParams = [];
//     let conditions = [];

//     if (subCategoryId) {
//         conditions.push('category_id = ?');
//         queryParams.push(subCategoryId);
//     }

//     if (mainCategoryId) {
//         conditions.push(`
//             category_id IN (
//                 SELECT id FROM categories WHERE parent_category_id = ?
//             )
//         `);
//         queryParams.push(mainCategoryId);
//     }

//     if (conditions.length > 0) {
//         query += ' WHERE ' + conditions.join(' AND ');
//     }

//     pool.query(query, queryParams, (error, results) => {
//         if (error) {
//             console.error('SQL Error:', error);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }
//         res.status(200).json(results);
//     });
// });
