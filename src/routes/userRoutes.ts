import {Router} from 'express';
import {UserController} from '../controllers/usersControllers';

export default class UserRoutes {

    router: Router;
    public userController: UserController = new UserController();

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.post("/register", this.userController.registerUser);
        this.router.post("/login", this.userController.authenticateUser);
    }
}