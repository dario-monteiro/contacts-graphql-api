import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  senha: string;
}
