import 'dotenv/config'; // ← Primera línea, antes de todo
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { error } from 'console';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true,
    transform : true,
    errorHttpStatusCode : 422, 
  }));
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Servidor corriendo en http://localhost:${port}`);
}
bootstrap();
