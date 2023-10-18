class UserController {
    constructor() {

    }

    async create(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await User.create({
                name,
                email,
                password
            });

            return response.json(user)
        } catch (error) {
            return res.status(500).send({
                error: "Registration Failed",
                message: error
            })
        }
    }
}

module.exports = UserController;