import { UserInfo } from './UserInfo.model';

export class UserModel {
    constructor(
        public id: number = 0,
        public username: string = "john_d",
        public email: string = "john.doe@gmail.com",
        public userInfo: UserInfo = new UserInfo()
    ) {

    }
}
