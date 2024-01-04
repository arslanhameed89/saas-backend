
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolver, UserService],
})
export class UserModule {}
