const mongooseDb = require('mongoose');


const connectDb = async ()=> {
    const MONGO_DB_URI_WEATHER = process.env.MONGO_DB_URI_WEATHER;
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };

    try {
        await mongooseDb.connect(MONGO_DB_URI_WEATHER , options);
    } catch(err) {
        console.error(err);
    };
};

module.exports = connectDb;