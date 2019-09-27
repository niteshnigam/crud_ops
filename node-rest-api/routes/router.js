const router = require('express').Router();
const product = require('../controller/product');

function getAllData(req, res){
    console.log(getAllData)
    product.getalldata()
        .then(data => {
            res.status(200).json(data);
            console.log(getAllData,"===============================")
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

router.get('/getproducts', getAllData);

module.exports = router;