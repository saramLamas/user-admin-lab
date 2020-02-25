import { UserModel } from '../models/UserModel.model';
import { UserInfo } from '../models/UserInfo.model';


export const USERS :UserModel[]=[
{
    id:1,
    username:"Elisheva",
    email:"el@gmail.com",
    userInfo: new UserInfo()
},
{
    id:2,
    username:"Chana",
    email:"ch@gmail.com",
    userInfo: new UserInfo()
},
{
    id:3,
    username:"Yehuda Arie",
    email:"ya@gmail.com",
    userInfo: new UserInfo()
}

];