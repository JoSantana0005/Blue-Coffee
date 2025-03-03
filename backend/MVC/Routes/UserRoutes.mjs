import {Router} from 'express';
import { UserController } from '../Controller/UserController.mjs';
import { UserRepository } from '../Models/user-repository.mjs';

const route = Router();
const userController = new UserController({UserRepository: UserRepository});
export const RouteUser = route;


// POST / register
RouteUser.post('/Register', userController.register);