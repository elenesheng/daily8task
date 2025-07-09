import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
