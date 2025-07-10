import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
//import { DevService } from './data/services/dev.service';
import { ProdutoModule } from './produto/produto.module';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      //useClass: DevService,  //-> usar em desenvolvimento
      useClass: ProdService, //-> usar em produção
      imports: [ConfigModule],
    }),
    CategoriaModule,
    AuthModule,
    UsuarioModule,
    ProdutoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
