let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) =>{
    res.render('index', {title: 'About'});
}

module.exports.displayProductPage = (req, res, next) =>{
    res.render('index', {title: 'Products'});
}

module.exports.displayServicePage = (req, res, next) =>{
    res.render('index', {title: 'Service'});
}

module.exports.displayContactPage = (req, res, next) =>{
    res.render('index', {title: 'Contact'});
}
