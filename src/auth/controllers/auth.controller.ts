import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guard/localAuth.guard';
import { UserLogin } from '../entities/userLogin.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('/usuarios')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() usuario: UserLogin): Promise<any> {
    return this.authService.login(usuario);
  }
}
