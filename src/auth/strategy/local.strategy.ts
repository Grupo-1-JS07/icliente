import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private _campoUsuario: string;
  private _campoSenha: string;

  constructor(private readonly authService: AuthService) {
    super();
    this._campoUsuario = 'usuario';
    this._campoSenha = 'senha';
  }

  async validate(usuario: string, senha: string): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const usuarioValido = await this.authService.validateUsuario(
      usuario,
      senha,
    );
    if (!usuarioValido) {
      throw new UnauthorizedException('Usuário e/ou senha incorretos!');
    }
    return usuarioValido; // retorno não será usado em lugar nenhum, é apenas para seguir as regras de um retorno quando se usa a tipagem de Promise
  }
}
