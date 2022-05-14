# Grupo 2
## Task API

API para la administración de tareas(Task) personales.

## Integrantes
- Juan Giraldo
- Daniel Quintero
- Joan Barrios

## Features

- Agregar nueva tarea.
- Elimina tarea.
- Edita tarea.
- Lista Tareas.


## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js]
- [Express]
- [mongoose]

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/dsquintero/API_TASKS.git
cd the-example-app.nodejs
```

```sh
npm install
```

## REST API
### Get list of Task
#### Request

GET /task/

http://localhost:3000/api/task/

### Get Task by Id
#### Request

GET /task/{id}

http://localhost:3000/api/task/{id}

### New Task
#### Request

POST /task/

http://localhost:3000/api/task

#### Request Body
```sh
{
    "description":"Enviar Correo",
    "author":"627f1f2eb22eaebf29d174db"
}
```

### Update Task
#### Request

PUT /task/{id}

http://localhost:3000/api/task/{id}

#### Request Body
```sh
{
    "description":"Enviar Correo",
    "author":"627f1f2eb22eaebf29d174db"
}
```

### Delete Task
#### Request

DELETE /task/{id}

http://localhost:3000/api/task/{id}


GET /user/

http://localhost:3000/api/user/

### Get User by Id
#### Request

GET /user/{id}

http://localhost:3000/api/user/{id}

### New User
#### Request

POST /user/

http://localhost:3000/api/user

#### Request Body
```sh
{
    "firstname": "Pedro",
	"lastname": "Perez",
	"email": "test@domain.com"
}
```

### Update User
#### Request

PUT /user/{id}

http://localhost:3000/api/user/{id}

#### Request Body
```sh
{
    "firstname":"Martinez"
}
```

### Delete User
#### Request

DELETE /user/{id}

http://localhost:3000/api/user/{id}