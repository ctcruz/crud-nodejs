const User = require("../models/user");

export class UserService {
  async getAll() {
    const users = await User.findAll();
    return users;
  }
}
