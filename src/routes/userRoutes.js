const { Router } = require('express');
const UserController = require('../controllers/user/UserController');

const userRoutes = Router();
const user = new UserController();

userRoutes.get("/", async (req, res) => {
  await user.find(req, res);
});

userRoutes.post("/register", async (req, res) => {
  await user.register(req, res);
});

userRoutes.get("/:id", async (req, res) => {
  await user.findUserById(req, res);
});

userRoutes.delete("/delete/:id", async (req, res) => {
  await user.delete(req, res);
});

userRoutes.put("/update/:id", async (req, res) => {
  await user.update(req, res);
});

module.exports = userRoutes;
