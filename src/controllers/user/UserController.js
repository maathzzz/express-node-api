const User = require("../../infra/schemas/userSchema");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({
        name,
        email,
        password,
        createdAt: new Date(),
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).send({
        error: "Registration Failed",
        message: error,
      });
    }
  }

  async find(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).send({
        error: "Registration Failed",
        message: error,
      });
    }
  }

  async findUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(500).send({
        error: "Registration Failed",
        message: error,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      return res.status(200).json("User deleted");
    } catch (error) {
      return res.status(500).send({
        error: "Deletion Failed",
        message: error,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findByIdAndUpdate(id, {
        name: name,
        email: email,
        password: password,
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).send({
        error: "Update Failed",
        message: error,
      });
    }
  }
}

module.exports = UserController;
