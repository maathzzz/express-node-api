const { Router } = require('express');
const UserController = require('../controllers/user/UserController');

const userRoutes = Router();

userRoutes.post("/register", async (req, res) => {
    const userRegister = new UserController();
    await userRegister.create(req, res);
});

userRoutes.get("/", async (req, res) => {
    const userRegister = new UserController();
    await userRegister.find(req, res);
});

module.exports = userRoutes;
