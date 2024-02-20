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

  async getUserById(userId) {
    const user = await User.findByPk(userId);
    return user;
  }

  async updateUser(userId, name, email) {
    const userUpdated = await User.update({ name: name, email: email }, { where: { id: userId } });
    return userUpdated;
  }
}

const userService = new UserService();

module.exports = userService;
