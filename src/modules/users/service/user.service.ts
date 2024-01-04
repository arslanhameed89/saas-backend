import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { CONNECTION } from '../../../core/database/database.symbols';
import { isEmpty } from  'lodash';


@Injectable()
export class UserService {
  private readonly userRepository: Repository<User>;
  constructor(
      @Inject(CONNECTION) connection: Connection,
  ) {
    this.userRepository = connection.getRepository(User);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(input: CreateUserDto): Promise<User> {
    const { name, email } = input
    if (isEmpty(name) || isEmpty(email)) {
      throw new BadRequestException();
    }
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }
}
