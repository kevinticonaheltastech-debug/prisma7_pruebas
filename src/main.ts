import 'dotenv/config'; // ← Primera línea, antes de todo
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { error } from 'console';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true,
    transform : true,
    errorHttpStatusCode : 422, 
  }));

  const config = new DocumentBuilder()
    .setTitle('API de Gestión de Proyectos')
    .setDescription('Documentación completa de la API para gestión de usuarios, proyectos y tareas')
    .setVersion('1.0')
    .addTag('usuarios', 'Gestión de usuarios del sistema')
    .addTag('proyectos', 'Gestión de proyectos')
    .addTag('tareas', 'Gestión de tareas')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);


  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Swagger corriendo en http://localhost:${port}/api/docs`);
}
bootstrap();
