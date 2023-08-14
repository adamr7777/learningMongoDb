const mongooseDb = require('mongoose');


const FortuneCookie = require('../model/FortuneCookie');

const sendFortunes = async (req, res)=> {
    const {fortunesData} = req.body;
    if(!fortunesData) return res.status(400).json({msg: 'no data'}); 
    res.status(200).json({msg: 'Success!'});

    try {
        const data = new FortuneCookie({fortunesData});

        await data.save();
        console.log('String document saved successfully');
    } catch(err) {
        console.error(err);
    };
};

module.exports = sendFortunes;