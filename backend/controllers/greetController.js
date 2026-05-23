const greetUser = (req,res) =>{
    const name = req.body.name;
    res.json({reply: `Hello ${name}, from backend!`})
};

module.exports = {
    greetUser,
};