# learning-nestjs
This is a note taking repo. that I might continue to update as I learn more about NestJS.
 
- [Main Resources to learn NestJS](#main-resources-to-learn-nestjs)  
- [Other resources I found useful](#other-resources-i-found-useful)
- [Kickstart a NestJS project with Prisma](#kickstart-a-nestjs-project-with-prisma)
- [VSCode Settings.json](#vscode-settings)
- [Insomnia Tips](#insomnia-tips)

## Main Resources to learn NestJS:
- Their [official documentation](https://docs.nestjs.com) is neat.
- Their active [discord](https://discord.com/invite/nestjs) channel. 

## Other resources I found useful:
- [NestJs Course for Beginners - Create a REST API](https://youtu.be/GHTA143_b-s)
- [NestJs JWT - Access Tokens & Refresh Tokens - Ultimate Guide](https://youtu.be/uAKzFhE3rxU?list=PLNTXksYYFsn8Dz2xrFYrMqEO1buLodr6P)
- [NestJs Application to upload/download file from GCP cloud storage](https://kuros.in/typescript/nestjs-upload-download-file-from-cloud-storage)
- [argon2](https://www.npmjs.com/package/argon2)
- [Prisma vs TypeORM](https://www.prisma.io/docs/concepts/more/comparisons/prisma-and-typeorm)
- [Prisma Middleware](https://www.prisma.io/docs/concepts/components/prisma-client/middleware)
- [Insomnia](https://insomnia.rest)

## Kickstart a NestJS project with Prisma:

1- Create your project and you can follow with a cleanup.
```
nest new .
```

2- Add and initalize Prisma.
```
yarn add -D prisma@latest
yarn add  @prisma/client
yarn prisma init
```

3- Create your database and add your first module.

4- Run [prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate).
```
yarn prisma migrate dev
```

5- Add the following validation pipe to `main.ts` which I believe to be a good practice.
```
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

## VSCode Settings
The following settings.json saved me a lot of headache but make sure the right extensions are added.
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## [Insomnia](https://insomnia.rest) Tips:
Things I found helpful when using Insomnia:
- To make use of the environment variables.
- To automate authentication per request, for example: you can fetch bearer tokens from the Login request response.
