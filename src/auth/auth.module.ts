import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/config/prisma.config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, UsersService],
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
         secret: process.env.JWT_SECRET,
         signOptions: {
              expiresIn: process.env.JWT_EXPIRES_IN
         }
    })
]
})
export class AuthModule {}
