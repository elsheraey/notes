import { ValidationPipe } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";

let app: NestApplication;

describe("App e2e", () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it.todo("should pass");
});