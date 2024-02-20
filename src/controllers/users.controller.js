const userService = require("../services/user.service");

class UserController {
  async getUsers(request, response) {
    const users = await userService.getAll();
    return response.status(200).json({ users: users });
  }

  async createUser(request, response) {
    const name = request.body.name;
    const email = request.body.email;

    const createdUser = await userService.createUser(name, email);

    return response.status(200).json({ user: createdUser });
  }

  async getUser(request, response) {
    const userId = request.params.userId;
    const user = await userService.getUserById(userId);
    return response.status(200).json({ user: user });
  }

  async updateUser(request, response) {
    const userId = request.params.userId;
    const name = request.body.name;
    const email = request.body.email;

    const user = await userService.getUserById(userId);

    if (!user) {
      return response.status(404).json({ message: "User not found!" });
    }

    const userUpdated = await userService.updateUser(userId, name, email);

    return response.status(200).json({ user: userUpdated });
  }

  async deleteUser(request, response) {
    const userId = request.params.userId;

    const user = await userService.getUserById(userId);

    if (!user) {
      return response.status(404).json({ message: "User not found!" });
    }

    await userService.deleteUser(userId);

    return response.status(200).json({ message: "User deleted successfully!" });
  }
}

const userController = new UserController();

module.exports = userController;
