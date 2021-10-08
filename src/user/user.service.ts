import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const email = createUserDto.email;
    const alreadyCreated = await this.userRepository.findOne({ email });

    if (!alreadyCreated) {
      const user = new User(
        createUserDto.name,
        createUserDto.email,
        createUserDto.password,
        createUserDto.profile_image,
      );
      await this.userRepository.persistAndFlush(user);

      return user;
    }
  }
}
