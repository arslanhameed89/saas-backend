import { v4 as uuid } from 'uuid'
import { Mock } from 'typemoq'
import { BadRequestException } from '@nestjs/common'
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

describe('UserService', () => {
    const userServiceMock = Mock.ofType<UserService>()

    const userId: string = uuid()
    const createUserInput: CreateUserDto = {
        name: 'arslan',
        email: 'test@test.com'
    }

    const createUserOutput: User = {
        id: userId,
        name: 'arslan',
        email: 'test@test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    beforeAll(async () => {
        userServiceMock
            .setup((x) => x.createUser(createUserInput))
            .returns(() => Promise.resolve(createUserOutput))

    })

    describe('Create user', () => {
        it('Should throw bad request exceptions', async () => {

            userServiceMock
                .setup((x) =>
                    x.createUser({
                        name: '',
                        email: 'existing@email.com'
                    })
                )
                .returns(() => {
                    throw new BadRequestException()
                })
        })
        it('Should create user', async () => {
            userServiceMock
                .setup((x) =>
                    x.createUser({
                        name: 'Arslan',
                        email: 'existing@email.com'
                    })
                )
                .returns(() => Promise.resolve(createUserOutput))
        })
    })
})