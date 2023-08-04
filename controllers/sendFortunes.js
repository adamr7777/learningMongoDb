

const sendFortunes = async (req, res)=> {
    const {fortunesData} = req.body;
    if(!fortunesData) return res.status(400).json({msg: 'no data'}); 
    console.log(fortunesData);
    res.status(200).json({msg: 'Success!'});
};

module.exports = sendFortunes;