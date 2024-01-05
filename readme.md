# Multi-Tenant SAAS Backend with NestJS, Postgres, and GraphQL

This application serves as a multi-tenant Software as a Service (SAAS) backend, utilizing NestJS, Postgres, and GraphQL. The architecture ensures data isolation and security between tenants by dynamically creating schemas for each tenant on-the-fly.

## Setup

### Prerequisites

- Docker
- Node >= 16

### Installation

1. **Clone the repository:**

    ```bash
    git clone git@github.com:arslanhameed89/saas-backend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd saas-backend
    ```

3. **Run the following command to start the application and set up the required containers:**

    ```bash
    docker-compose up -d
    ```

   This will start the Postgres database and the application within the same Docker network.

## Configuration

### Environment Variables

All necessary environment variables are already configured in the `docker-compose.yml` file. Modify them as needed for your specific deployment.

- The application will be accessible at [http://localhost:3050](http://localhost:3050).

Environment variables are already set in the `docker-compose.yml` file.

## Tenant Management

To create new tenants, use the endpoint that is open without the `x-tenant-id` restriction. This endpoint returns the tenant ID, which must be used to access the rest of the API.

Tenants are created in the DB under the public schema using the table `tenants`. After creation, the tenant ID must be used to access the rest of the API.

All subsequent API requests need to provide `x-tenant-id` as part of the header; otherwise, it will throw an exception.

## Database Schema

![Tenants Schemas](https://i.postimg.cc/YCNsTWFL/Screen-Shot-2024-01-05-at-9-18-13-AM.png)
![Tenats info](https://i.postimg.cc/Dy6CgT31/Screen-Shot-2024-01-05-at-9-21-33-AM.png)

The database contains multiple schemas, with each schema representing a separate tenant. All migrations run and generate tables under each tenant schema separately.

## Examples

### Tenant Creation

```bash
curl --location 'localhost:3050/tenants/' \
--header 'Content-Type: application/json' \
--data '{
    "name": "first-tenant"
}'
```
[![Tenants Creation](https://i.postimg.cc/KvtKSG8g/Screen-Shot-2024-01-05-at-9-25-52-AM.png)](https://postimg.cc/Ln64jMfH)


### GraphQL User Creation

```bash
curl --location 'http://localhost:3050/graphql' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3050' \
--header 'x-tenant-id: 39000b6b-ccd1-4254-a084-66e53fb3b1f4' \
--data-raw '{
  "query": "mutation CreateUser($input: CreateUserDto!) { createUser(input: $input) { name email } }",
  "variables": {
    "input": {
      "name": "arslan 1",
      "email": "test@test.com"
    }
  }
}
```
[![User Creation](https://i.postimg.cc/FzsPtWjY/Screen-Shot-2024-01-05-at-9-32-07-AM.png)](https://postimg.cc/ftp7mvqs)


### x-tenant-id Exception
If the request headers doesn't contain the x-tenant-id, it will throw an exception.

[![Tenant Id Exception](https://i.postimg.cc/qvPpxYKX/Screen-Shot-2024-01-05-at-9-37-28-AM.png)](https://postimg.cc/FYxt9TD7)


### Listing Users

```bash
curl --location 'http://localhost:3050/graphql' \
--header 'Content-Type: application/json' \
--header 'x-tenant-id: <tenant-id>' \
--data '{
    "query": "query {  getUsers{ name,  email  }}"
}'

```
[![User Listing](https://i.postimg.cc/W49LfHFH/Screen-Shot-2024-01-05-at-9-38-27-AM.png)](https://postimg.cc/XZyzrxgf)


### GraphQL Schema

[![GraphQL Schema](https://i.postimg.cc/YCV7RP5q/Screen-Shot-2024-01-05-at-10-15-07-AM.png)](https://postimg.cc/ZWrXKwY1)

Happy Coding :)

