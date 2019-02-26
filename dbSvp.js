let mongo = require('mongodb').MongoClient;
let mongoObjectID = require('mongodb').ObjectID;
let state = {
	db : null
}
module.exports = {
	connect: function(url,done) {
		if(state.db) return done();
		mongo.connect(url,function(err,db){
			if(err) return done(err);
			state.db = db.db('serviceProvider')
			done();
		});
	},
	get: function(){ return state.db.db('serviceProvider') },
	objectId : function() { return mongoObjectID; },
	close: function(done){
		if(state.db) state.db.close(function(err,res){
			state.db = null;
			state.mode = null;
			done(err);
		});
	}
}
