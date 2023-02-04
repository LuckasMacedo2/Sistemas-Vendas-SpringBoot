

## Instalar as instâncias do PostgreSQL
* Autenticação
docker run --name auth-db -p 5433:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

* Produtos
docker run --name product-db -p 5434:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

## Instalar a insância do mongoDB
* Bando NoSQL de vendas
docker run --name sales-db -p 27017:27017 -p 28017:28017 -e MONGODB_USER="admin" -e MONGODB_DATABASE="sales" -e MONGODB_PASS="123456" tutum/mongodb

Comunicação com o mongodb
mongo mongodb://admin:123456@localhost:27017/sales
connect("localhost:27017/sales", "admin", "123456")
db.auth({user: "admin", pwd: "123456"})
mongo "sales" -u "admin" -p "123456" --host <host> --port <port>

## Instalar a insância do rabbitMQ
docker run --name sales_rabbit -p 5672:5672 -p 25676:25676 -p 15672:15672 rabbitmq:3-management

## Executar o compose
docker-compose up --build