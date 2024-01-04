import { Resolver, Query, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './service/user.service';
import { User } from './entities/user.entity';
import { CreateUserOutput } from './dto/create-user.output';
import { Injectable } from '@nestjs/common';

@Resolver(of => User)
@Injectable()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(returns => [User])
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Mutation(returns => CreateUserOutput) // Specify the output type for the mutation
    async createUser(@Args('input') input: CreateUserDto) {
        return this.userService.createUser(input);
    }
}
