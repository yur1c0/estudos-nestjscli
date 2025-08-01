import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove chave que não estão no DTO
    forbidNonWhitelisted: true, // Levantar erro quando a chave não existir
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
