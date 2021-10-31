export class CreateUserRO {
  isSuccess: boolean;
  data: UserRO;

  constructor(isSuccess: boolean, data: UserRO) {
    this.isSuccess = isSuccess;
    this.data = new UserRO(data);
  }
}

export class UserRO {
  id: number;
  name: string;
  email: string;
  profileImage: string;

  constructor(data: UserRO) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.profileImage = data.profileImage;
  }
}
