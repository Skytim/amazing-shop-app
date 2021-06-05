import express from 'express';
import { users } from '../Mockdata';
import User from '../models/userModel';
import exprssAsyncHandler from 'express-async-handler';
const userRouter = express.Router();

userRouter.get('/seed', exprssAsyncHandler(async (req, res) => {
    await User.remove({});
    const createUsers = await User.insertMany(users);
    res.send({ createUsers });
}))

export default userRouter;