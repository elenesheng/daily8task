// @ts-ignore
import { NestFactory } from '@nestjs/core';
// @ts-ignore
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  
  await app.listen(3001);
  console.log('Backend is running on http://localhost:3001');
}
bootstrap(); 