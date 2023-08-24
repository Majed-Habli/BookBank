const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token", token)
    if(!token) return res.status(401).send({message: "Unauthorized"});
    console.log("here")
    try {
        console.log("sa", process.env.SECRET_KEY)

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("s", decoded)
        req.user = decoded
        next()

    } catch (error) {
        console.log(error);
        res.status(401).send({message: "Unauthorized"})
    }
}

module.exports=authMiddleware;