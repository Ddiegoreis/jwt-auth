import model from '../model/User'
import User from '../model/User'

class UserController {
	async store(req, res) {
		const { email, password } = req.body

		const user = await User.create({
			email,
			password,
		})

		const { _id } = user
		return res.json({ _id })
	}
}

export default new UserController()
