import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API Concursos ES')
    .setDescription('Manual api-concursos')
    .setVersion('1.0')
    .addTag('concursos')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/doc', app, document);

  // tslint:disable-next-line:radix
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
