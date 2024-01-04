import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { EmailScalar } from '../../../common/scalars/email.scalar';


@InputType()
export class CreateUserDto {
    @Field()
    @MinLength(10)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @Length(30, 500)
    email: string;
}