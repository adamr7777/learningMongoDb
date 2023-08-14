const mongooseDb = require('mongoose');

const Schema = mongooseDb.Schema;


const FortuneSchema = new Schema({
    type: [String],
});


module.exports = mongooseDb.model('FortuneCookie', FortuneSchema);