const User = require('../../infra/schemas/userSchema');

class UserController {
    async create(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await User.create({
                name,
                email,
                password,
                createdAt: new Date()
            });

            return res.json(user)
        } catch (error) {
            return res.status(500).send({
                error: "Registration Failed",
                message: error
            })
        }
    }

    async find(req, res) {
        try {

            const users = await User.find();

            return res.json(users);

        } catch (error) {

            return res.status(500).send({
                error: "Registration Failed",
                message: error
            })

        }
    }
}

module.exports = UserController;