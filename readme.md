

## Instalar as instâncias do PostgreSQL
* Banco para autenticação
 
```docker run --name auth-db -p 5433:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11```

* Banco de Produtos

```docker run --name product-db -p 5434:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11```

## Instalar a insância do mongoDB
* Banco NoSQL de vendas

```docker run --name sales-db -p 27017:27017 -p 28017:28017 -e MONGODB_USER="admin" -e MONGODB_DATABASE="sales" -e MONGODB_PASS="123456" tutum/mongodb```

Comunicação com o mongodb
mongo mongodb://admin:123456@localhost:27017/sales
connect("localhost:27017/sales", "admin", "123456")
db.auth({user: "admin", pwd: "123456"})
mongo "sales" -u "admin" -p "123456" --host <host> --port <port>

## Instalar a insância do rabbitMQ
  
```docker run --name sales_rabbit -p 5672:5672 -p 25676:25676 -p 15672:15672 rabbitmq:3-management```

## Executar o compose

```docker-compose up --build```

## Instalar o yarn

```npm install --global yarn```

Iniciar o projeto

```yarn init -y```

Adicionando dependências do projeto de autenticação (auth-api)

```yarn add express```
```yarn add cors```
```yarn add jsonwebtoken```

Nodemon como dependência de desenvolvimento para a cada alteração no código reiniciar o servidor. Utilizada apenas em desenvolvimento.

```yarn add nodemon -D```

Adicionando dependências do projeto de produtos (product-api)
Acessar: https://start.spring.io/
Adicionar as dependências:
* DevTools;
* Lombok;
* Data JPA;
* PostGreSQL Drive;
* RabbitMQ;
* OpenFeign.

Adicionando dependências do projeto de vendas (sales-api)

```yarn add express```
```yarn add cors```
```yarn add jsonwebtoken```
```yarn add mongoose```

```yarn add nodemon -D```

## Criação das imagens das apis em node

auth-api

```docker image build -t auth-api```
```docker run --name auth-api -p 8080:8080 auth-api```

sales-api

```docker image build -t sales-api .```
```docker run --name sales-api -e PORT=8082 -p 8082:8082 sales-api```

product-api

```docker image build -t product-api .```
```docker run --name product-api -p 8081:8081 product-api```

Subir o compose

```docker compose up --build```

# Auth-api

Instalar a lib do sequelize

```yarn add sequelize```

Instalar a lib do postgresSQL

```yarn add pg```

Instalar a lib do bcrypt para criptografar a senha

```yarn add bcrypt```