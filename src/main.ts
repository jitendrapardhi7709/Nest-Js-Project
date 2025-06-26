import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Standard Nest app
  app.useGlobalPipes(new ValidationPipe()); // This works here
  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
