import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioInput {
  @Field()
  email: string;

  @Field()
  senha: string;
}
