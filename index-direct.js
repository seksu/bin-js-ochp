// Created by Sek Su

const MONGO_URL = 'mongodb://icw_root:icw_pass\!9@192.168.10.3:27017/iChargerWhiz?authSource=admin'
const SVP_URL		=	'mongodb://svp_root:svp_pass@192.168.10.3:27017/serviceProvider'
const ROOT_URL  = '/ochp/serviceProvider' // http://localhost:9000/ocpp/s/15
const HTTP_PORT = 9005
const DB = require('./db');
const DBSVP = require('./dbSvp');

let Router = require('express')();
let http = require('http').Server(Router);
let soap = require('soap');
let BodyParser = require('body-parser');
let ochpDirect = require('./ochp-direct.js');

const wsdlOchpDirect = require('fs').readFileSync('./ochp-direct.wsdl','utf8');

console.log("OCHP ==>");
console.log('Starting http://localhost:'+HTTP_PORT+ROOT_URL);

DBSVP.connect(SVP_URL,function(err){
	if(err) {
		console.log('Mongo Error :'+err);
		return
	}
	else{
		console.log('Connected Mongo')

    // Router.get('/ochp/serviceProvider',function (req,res){
    //   console.log(req)
    // })
    // Router.post('/ochp/serviceProvider',function (req,res){
    //   console.log(req)
    //   res.send("hello")
    // })



		Router.use(BodyParser.raw({type: function(){return true;}, limit: '5mb'}));
		Router.listen(HTTP_PORT,function(){

			console.log('OCHP serviceProvider listening on port ' + HTTP_PORT)

			let OCHP = soap.listen(Router, ROOT_URL , ochpDirect, wsdlOchpDirect)

			OCHP.on('headers',function(header){
				console.log(new Date(),header)
			})
		})
	}
})
