const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env/environment");

module.exports = (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).send({ message: "Token não encontrado" });
    }

    const parts = authToken.split(" ");

    if (!parts.length === 2) {
        return res.status(401).send({ message: "Token inválido" });
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme )){
        return res.status(401).send({ message: "Token mal formatado" });
    }

    jwt.verify(token, SECRET, (error, decoded) => {
       if (error) return res.status(401).send({ message: "Token inválido" });

       req.userId = decoded.id;
        return next()
    });

    next();
};