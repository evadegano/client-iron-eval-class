# IronEval

A simple test environment designed to assess iron-students web dev skills.

# Installation

```shell
$ npm i
$ npm start
```

# The .env file

Create a .env file containing this line:

```
REACT_APP_BACKEND_URL = https://backend-jury.herokuapp.com
```

# API calls

This base URL should prefix all requests:
`https://backend-jury.herokuapp.com/api`

| Route          | HTTP Verb | Response           |
| -------------- | --------- | ------------------ |
| `/cats`        | GET       | Get all cats       |
| `/cats/random` | GET       | Get a random cat   |
| `/cats`        | POST      | Create a cat       |
| `/cats/:id`    | GET       | Get a cat by id    |
| `/cats/:id`    | DELETE    | Delete a cat by id |

> The DELETE route won't actually delete the ressource (So we don't need to reseed every few minutes),
> you might want to verify what the server tells you !

The same endpoints are available for superheroes and comics publishers, beginning respectively with "heroes" and "publishers".
