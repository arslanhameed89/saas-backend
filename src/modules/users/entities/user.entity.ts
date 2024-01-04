import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../core/entities/abstract.entity';
import { EmailScalar } from '../../../common/scalars/email.scalar';
import { Field, ObjectType } from '@nestjs/graphql';
@Entity({ name: 'users'})
@ObjectType('users')
export class User extends AbstractEntity {

  @Field()
  @Column({ type: 'varchar' })
  name: string;

  @Field()
  @Column({ type: 'varchar' })
  email: string;

}
