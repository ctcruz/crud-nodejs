const userController = require("../controllers/users.controller");
const router = require("express").Router();

// CRUD Routes /users
router.get("/", userController.getUsers); // /users
router.delete('/', userController.createUser); // /users
router.get('/:userId', userController.getUser); // /users/:userId
router.patch('/:userId', userController.updateUser); // /users/:userId
// router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;
