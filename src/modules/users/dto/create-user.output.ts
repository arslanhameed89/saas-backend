import { ObjectType, Field } from '@nestjs/graphql';
import { Length, MinLength } from 'class-validator';

@ObjectType()
export class CreateUserOutput {
    @Field()
    @MinLength(10)
    name: string;

    @Field()
    @Length(30, 500)
    email: string;
}
