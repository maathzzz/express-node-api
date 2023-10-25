const { Router } = require('express');
const UserController = require('../controllers/user/UserController');

const userRoutes = Router();

userRoutes.get("/", async (req, res) => {
    const user = new UserController();
    await user.find(req, res);
});

userRoutes.post("/register", async (req, res) => {
    const user = new UserController();
    await user.create(req, res);
});

userRoutes.get("/:id", async (req, res) => {
    const user = new UserController();
    await user.findUserById(req, res);
});

userRoutes.delete("/delete/:id", async (req, res) => {
    const user = new UserController();
    await user.delete(req, res);
});

userRoutes.put("/update/:id", async (req, res) => {
    const user = new UserController();
    await user.update(req, res);
});


module.exports = userRoutes;
