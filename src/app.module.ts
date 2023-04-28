import { Module } from '@nestjs/common';
import {ConfigModulue } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Entity} from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module;
import { Users } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot{(
      isGlobal: true
    )},
  controllers: [AppController],
  providers: [AppService],
}),
TypeOrmModule.forRoot{(
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: ParseIntPipe(process.env.DB_PORT),
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  entities: entities,
  synchronize: true,

}),
UsersModule
],
controllers:[AppController],
providers: [AppService],
})
export class AppModule {}
