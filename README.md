# 🚀ICliente

Sistema de gerenciamento de CRM - Gestão de Relacionamento com o Cliente (Customer Relationship Management) desenvolvido com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/), utilizando banco de dados **MySQL**.

---

## 📝 Descrição

O **ICliente** é uma API RESTful para controle de usuários, produtos e categorias de uma organização. Permite operações completas de cadastro, consulta, atualização e remoção dessas entidades, além de gerenciar os relacionamentos entre elas.

---

## ✅ Funcionalidades

- CRUD completo de **Usuários**
- CRUD completo de **Produtos** | Com verificação de disponibilidade do produto
- CRUD completo de **Categorias**
- Relacionamentos entre usuários, produtos e categorias

---

## 🖱️ Usabilidade

📍 **Acessando o deploy:**

- Clique [aqui](https://bc-invest-api.herokuapp.com/docs) e veja como é simples utilizar.

---

📍 **Acessando o local pelo Swagger:**

Clone o repositório e instale as dependências:

```bash
git clone git@github.com:Grupo-1-JS07/icliente.git
cd iclient
npm install
npm run start:dev
```
> Após rodar a aplicação localmente, você deverá acessar através de:

- `http://localhost:{porta}/swagger` 

> Caso prefira outro cliente, aqui estão algumas sugestões:

  :bulb: [HTTPie](https://httpie.io/) | :bulb: [Postman](https://www.postman.com/) | :bulb: [Insomnia](https://insomnia.rest/) | :bulb: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

## 📍 Configurações locais

<details>

<summary id="env"><strong>:pencil: Para que rode normalmente, deve habilitar como desenvolvimento o banco de dados:</strong></summary><br/>

<img width="744" height="700" alt="image" src="https://github.com/user-attachments/assets/5bf6e185-02a0-44dc-95a3-6d4acbdbc2b3" />
</details>

<details>
  
<summary id="env"><strong>:pencil: Não se esqueça de alterar as credenciais do seu banco de dados:</strong></summary><br/>

<img width="829" height="630" alt="image" src="https://github.com/user-attachments/assets/66d11cbe-f8ef-4a58-a108-f8d8872ff8d1" />
</details>


---

### ⚙️ Como utilizar as rotas

- Para que as rotas sejam consumidas, é necessário que a pessoa usuária faça login.
- Para fazer login é necessário usar rota `POST /login` preencha com as credenciais e clique em **`Execute`**.
- A aplicação retornará um **token**.
- Após o login, o token retornado deve ser inserido em **`Authorize`**. Isso permitirá a autenticação e autorização para todas as rotas protegidas.
- Depois disso, o token será automaticamente aplicado em todas as requisições. Basta clicar em **`Execute`** nas demais rotas.

---

## 🛠 Tecnologias Utilizadas

### 🔧 Backend e Framework

- [NestJS](https://nestjs.com/) — Framework para construção de APIs robustas com TypeScript
- [TypeORM](https://typeorm.io/) — ORM para gerenciamento de entidades e integração com banco de dados
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration) — Gerenciamento de variáveis de ambiente

### 🗃 Banco de Dados

- [MySQL](https://www.mysql.com/) — Banco de dados relacional utilizado em produção
- [SQLite](https://www.sqlite.org/index.html) — Banco leve utilizado nos testes E2E
- [mysql2](https://www.npmjs.com/package/mysql2) — Driver de conexão com MySQL
- [pg](https://www.npmjs.com/package/pg) — Driver PostgreSQL (instalado, mas opcional)

### 🧠 Segurança e Autenticação

- [bcrypt](https://www.npmjs.com/package/bcrypt) — Criptografia de senhas
- [Passport](https://www.passportjs.org/) — Middleware de autenticação
- [passport-local](http://www.passportjs.org/packages/passport-local/) — Estratégia de login com usuário e senha
- [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) — Estratégia de autenticação com JWT
- [@nestjs/jwt](https://docs.nestjs.com/security/authentication#jwt-functionality) — Integração do JWT com NestJS

### 📦 Validação e Transformação

- [class-validator](https://github.com/typestack/class-validator) — Validação de objetos DTO
- [class-transformer](https://github.com/typestack/class-transformer) — Transformação automática de objetos

### 🧪 Testes

- [Jest](https://jestjs.io/) — Testes unitários e de integração
- [Supertest](https://github.com/visionmedia/supertest) — Testes end-to-end com simulação de requisições HTTP
- [sqlite3](https://www.npmjs.com/package/sqlite3) — Usado para testes E2E com banco em memória

### 📚 Documentação

- [Swagger](https://swagger.io/) via [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) — Documentação automática da API
---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

## 📌 Autores

[Brenndha Cabral](https://www.linkedin.com/in/brenndhacabral/) | [Daniel Souza](https://www.linkedin.com/in/daniel-castro-de-souza-602491133/) | [Kannanda Andrade](https://www.linkedin.com/in/nnandak/) | [Monique Ohana](https://www.linkedin.com/in/moniqueohana/) | [Rafael Santanna](https://www.linkedin.com/in/rafael-selles-sant-anna/) | [Sara Silva](https://www.linkedin.com/in/sara-silva-9739b0183/)
