const User = require("../models/user");

class UserService {
  async getAll() {
    const users = await User.findAll();
    return users;
  }

  async createUser(name, email) {
    const createdUser = await User.create({ name: name, email: email });
    return createdUser;
  }
}

const userService = new UserService()

module.exports = userService