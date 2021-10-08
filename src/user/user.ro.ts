export class CreateUserRO {
  is_success: boolean;
  data: UserData;

  constructor(isSuccess: boolean, data: UserData) {
    this.is_success = isSuccess;
    this.data = new UserData(data);
  }
}

export class UserData {
  id: number;
  name: string;
  email: string;
  profile_image: string;

  constructor(data: UserData) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.profile_image = data.profile_image;
  }
}
