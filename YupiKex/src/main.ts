import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Yupikex")
    .setDescription("Документатция по REST API")
    .setVersion("1.0.0")
    .addTag("yupikex")
    .build();

  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/swagger", app, documentation);

  await app.listen(3000);
}
bootstrap();
