import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async encryptPassword(senha: string): Promise<string> {
    const salto: number = 10; // quantas vezes foram criptografadas
    return await bcrypt.hash(senha, salto);
  }

  async comparePassword(
    senhaInserida: string,
    senhaBanco: string,
  ): Promise<boolean> {
    return await bcrypt.compare(senhaInserida, senhaBanco);
  }
}
