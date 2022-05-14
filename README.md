# Team 2
## Task API

API for the administration of personal tasks.

## Members
- Juan Giraldo
- Daniel Quintero
- Joan Barrios

## Features
### User
- Get All Users.
- Get User By ID.
- Create User.
- Update User.
- Delete User.

### Task
- Get All Tasks.
- Get Task By ID.
- Create Task.
- Update Task.
- Delete Task.

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
### Get All Users
#### Request
GET /user/

http://localhost:3000/api/user/

### Get User By ID
#### Request

GET /user/{id}

http://localhost:3000/api/user/{id}

### Create User
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


### Get All Tasks
#### Request

GET /task/

http://localhost:3000/api/task/

### Get Task By ID
#### Request

GET /task/{id}

http://localhost:3000/api/task/{id}

### Create Task
#### Request

POST /task/

http://localhost:3000/api/task

#### Request Body
```sh
{
	"author":"{user_id}",
	"description":"Task 1"
}
```

### Update Task
#### Request

PUT /task/{id}

http://localhost:3000/api/task/{id}

#### Request Body
```sh
{
    "description":"Task 2"
}
```

### Delete Task
#### Request

DELETE /task/{id}

http://localhost:3000/api/task/{id}