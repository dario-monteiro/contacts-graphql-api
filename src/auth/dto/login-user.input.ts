import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  username: string;

  @Field()
  password: string;
}
