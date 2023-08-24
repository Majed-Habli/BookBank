const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/users.model")

const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email: email})
    if(!user) return res.status(404).send({message: "email/password incorrect"});

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) return res.status(404).send({message: "pass incorrect"});

    const {password: hashedPassword, _id, ...userInfo} = user.toJSON();
    const token = jwt.sign({password: hashedPassword, email, _id}, process.env.SECRET_KEY);

    res.send({
        token,
        user: userInfo
    })

}

const register = async(req, res)=>{
    const {name, email,password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });

    user.save()

    res.send(user)
    
}

const verify = (_, res)=>{
    res.send("Verfied")
}

module.exports = {login, register, verify}