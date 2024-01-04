import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '../user.resolver';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { DatabaseModule } from '../../../core/database/database.module';

describe('UserResolver', () => {
    let userResolver: UserResolver;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
            providers: [UserResolver, UserService],
        }).compile();

        userResolver = module.get<UserResolver>(UserResolver);
        userService = module.get<UserService>(UserService);
    });

    describe('getUsers', () => {
        it('should return an array of users', async () => {
            const expectedUsers: User[] = [{ id: '39000b6b-ccd1-4254-a084-66e53fb3b1f4', name: 'John Doe', email: 'john@example.com', createdAt: new Date(), updatedAt: new Date() }];
            jest.spyOn(userService, 'getUsers').mockResolvedValue(expectedUsers);

            const result = await userResolver.getUsers();

            expect(result).toEqual(expectedUsers);
        });
    });

    describe('createUser', () => {
        it('should create a new user', async () => {
            const createUserDto: CreateUserDto = { name: 'New User', email: 'newuser@example.com' };
            const expectedCreateUserOutput: User = { id: '39000b6b-ccd1-4254-a084-66e53fb3b1f4', ...createUserDto, createdAt: new Date(),
                updatedAt: new Date(), }; // Assuming the service returns the created user with an ID
            jest.spyOn(userService, 'createUser').mockResolvedValue(expectedCreateUserOutput);

            const result = await userResolver.createUser( createUserDto);

            expect(result).toEqual(expectedCreateUserOutput);
        });
    });
});
