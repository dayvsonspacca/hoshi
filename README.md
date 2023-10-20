
# Hoshi 🌠

Hoshi é uma API REST focada no aprendizado do framework NestJS sua proposta é servir informações sobre os planetas do sistema solar como massa, luas e etc.


## Instalação

Para instalar e rodar a API localmente siga as instruções:

Clone o repositório:
```
$ git clone https://github.com/dayvsonspacca/hoshi.git
```

Instale os pacotes:
```bash
$ cd hoshi
$ pnpm install
```

Execute as migrações do banco de dados e popule ele:
```bash
$ npx prisma migrate dev --name init
$ pnpm run seed:planets
$ pnpm run seed:moons
``` 

## Documentação da API

Depois de subir a aplicação localmente sua documentação pode ser encontrada [aqui](http://localhost:3000/api) através do swagger.
