import { UserService } from "../services/user.service";

// CRUD Controllers

export default class UserController {
  userService = new UserService();

  //get all users
  async getUsers(req, res, next) {
    const users = await this.userService.getAll();
    return res.status(200).json({ users: users });
  }
}
