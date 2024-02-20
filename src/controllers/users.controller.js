const userService = require("../services/user.service");

class UserController {
  //get all users
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

  // //update user
  // exports.updateUser = (req, res, next) => {
  //   const userId = req.params.userId;
  //   const updatedName = req.body.name;
  //   const updatedEmail = req.body.email;
  //   User.findByPk(userId)
  //     .then(user => {
  //       if (!user) {
  //         return res.status(404).json({ message: 'User not found!' });
  //       }
  //       user.name = updatedName;
  //       user.email = updatedEmail;
  //       return user.save();
  //     })
  //     .then(result => {
  //       res.status(200).json({message: 'User updated!', user: result});
  //     })
  //     .catch(err => console.log(err));
  // }

  // //delete user
  // exports.deleteUser = (req, res, next) => {
  //   const userId = req.params.userId;
  //   User.findByPk(userId)
  //     .then(user => {
  //       if (!user) {
  //         return res.status(404).json({ message: 'User not found!' });
  //       }
  //       return User.destroy({
  //         where: {
  //           id: userId
  //         }
  //       });
  //     })
  //     .then(result => {
  //       res.status(200).json({ message: 'User deleted!' });
  //     })
  //     .catch(err => console.log(err));
  // }
}

const userController = new UserController();

module.exports = userController;
