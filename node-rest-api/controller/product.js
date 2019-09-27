var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
var Product = require('../models/product');
class products {

    constructor() {

    }

    /* GET ALL PRODUCTS */
    getalldata() {
        return new Promise((resolve, reject) => {
            Product.find(function (err, products) {
                if (err) reject(err);
                resolve(products);
            });
        });        
    }
    /* GET SINGLE PRODUCT BY ID */
    getsingledata() {
        Product.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    /* SAVE PRODUCT */
    postdata() {
        Product.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    /* UPDATE PRODUCT */
    updatedata(req, res, next) {
        Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    /* DELETE PRODUCT */
    deletedata(req, res, next) {
        Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
}

module.exports = new products();