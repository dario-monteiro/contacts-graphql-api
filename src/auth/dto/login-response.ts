import { Field, ObjectType } from '@nestjs/graphql';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => Usuario)
  user: Usuario;
}
