import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { Bcrypt } from '../bcript/bcript';
import { UserLogin } from '../entities/userLogin.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt,
  ) {}

  async validateUsuario(usuario: string, senha: string): Promise<any> {
    const UsuarioEncontrado = await this.userService.findByUser(usuario);

    if (!UsuarioEncontrado)
      throw new UnauthorizedException('Usuário e/ou senha incorretos!');

    const matchPassword = await this.bcrypt.comparePassword(
      senha,
      UsuarioEncontrado.password,
    );

    if (UsuarioEncontrado && matchPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...resposta } = UsuarioEncontrado;
      return resposta; // retorno não será usado em lugar nenhum, é apenas para seguir as regras de um retorno quando se usa a tipagem de Promise
    }

    return null; // retorno não será usado em lugar nenhum, é apenas para seguir as regras de um retorno quando se usa a tipagem de Promise
  }

  async login(userLogin: UserLogin) {
    const payload = { sub: userLogin.user };

    const UsuarioEncontrado = await this.userService.findByUser(userLogin.user);

    return {
      id: UsuarioEncontrado?.id,
      name: UsuarioEncontrado?.name,
      user: userLogin.user,
      senha: '', // retornaremos (mesmo vazio) caso futuramente haja uma tratativa no front
      photo: UsuarioEncontrado?.photo,
      token: `Bearer ${this.jwtService.sign(payload)}`, // será tratado no -- a remoção do "Bearer " de forma abstrata, não precisamos fazer na mão
    };
  }
}
