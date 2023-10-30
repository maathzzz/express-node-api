const { compare } = require('bcryptjs');
const User = require('../../infra/schemas/userSchema');

class AuthController {
    async login(req ,res) {
        try {
            const { email, password } = req.body
            
            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                return res.status(400).send({ error: 'User not found' });
            }

            if (password !== user.password) {
                return res.status(400).send({ error: 'Invalid password' });
            }

            const auth = await compare(password, user.password);
            
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).send({
                error: "Login Failed",
                message: error,
            });
        }
    }
}

module.exports = AuthController;

