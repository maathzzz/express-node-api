const jwt =  require('jsonwebtoken');
const { compare } = require('bcryptjs');
const User = require('../../infra/schemas/userSchema');
const { SECRET } = require('../../config/env/environment');

class AuthController {
    async login(req ,res) {
        try {
            const { email, password } = req.body
            
            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                return res.status(400).send({ error: 'User not found' });
            }

            // if (password !== user.password) {
            //     return res.status(400).send({ error: 'Invalid password' });
            // }

            if(!await compare(password, user.password)){
                return res.status(400).send({ error: 'Invalid password' });
            }

            // node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
            const token = jwt.sign({ id: user._id }, SECRET, {
                expiresIn: 86400,
            });

            user.password = undefined;
            
            return res.status(200).send({user, token});
        } catch (error) {
            return res.status(500).send({
                error: "Login Failed",
                message: error,
            });
        }
    }
}

module.exports = AuthController;

