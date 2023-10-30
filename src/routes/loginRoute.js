const { Router } = require("express");
const AuthController = require("../controllers/auth/AuthController")

const loginRoutes = Router();
const auth = new AuthController();

loginRoutes.post("/login", async (req, res) => {
    await auth.login(req, res);
})

module.exports = loginRoutes;

