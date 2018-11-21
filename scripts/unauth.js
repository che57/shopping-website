
var express = require("express");
var bodyParser = require("body-parser");

var Item = require("../models/items");
var User = require("../models/users");
var Comment = require("../models/comments");
var CollectionItem = require("../models/collectionItems");
var Collection = require("../models/collections");

var router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use((req, res, next)=>{
    console.log('something is happening....');
    next();
});

router.route('/items')
    .get((req, res)=>{
        Item.find((err, items)=>{
            if(err) res.send(err);
            res.json(items);
        })
    });
    
router.route('/items/:item_id')
    .get((req, res)=>{
        Item.findById(req.params.item_id, (err, item)=>{
            if(err) res.send(err);
            res.json(item);
        })
    });
    
router.route('/users')
    .post((req, res)=>{
        var user = new User();
        user.userName = req.body.userName;
        var password = req.body.password;
        user.state = 1;
        
        if(user.userName == '' || user.userName == null){
            res.json({msg: 'must input a userName!'});
        }
        else if(password == '' || password == null){
            res.json({msg: 'must input a password!'});
        }
        else{
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) res.send(err);
                    user.password = hash;
                    user.save((err)=>{
                        if(err) res.send(err);
                        res.json({message: 'New User created!!'});
                    })
                })
            })
        }
    });
router.route('/items/:item_id/comments/')
    .get((req, res)=>{
        Comment.find({itemId: req.params.item_id}, (err, comments)=>{
            if(err) res.send(err);
            res.json(comments);
        })
    });
    
router.route('/collections')
    .get((req, res) => {
        Collection.find({visibilityState: 1}, (err, collection) => {
            if(err) res.send(err);
            res.json(collection);
        })
    })
    
router.route('/collections/:collecion_id')
    .get((req, res) => {
        Collection.find({_id: req.params.collecion_id, visibilityState: 1}, req.params.collecion_id, (err, collection) => {
            if(err) res.send(err);
            res.json(collection);
        })
    })

router.route('/collectionItems/:collectionItem_id')
    .get((req, res) => {
        CollectionItem.findById(req.params.collectionItem_id, (err, collectionItem) => {
            if(err) res.send(err);
            res.json(collectionItem);
        })
    })
    
router.route('/collections/:collecion_id/collectionItems')
    .get((req, res) => {
        CollectionItem.find({collectionId: req.params.collecion_id}, (err, collectionItem) => {
            if(err) res.send(err);
            res.json(collectionItem);
        })
    })

module.exports = router;