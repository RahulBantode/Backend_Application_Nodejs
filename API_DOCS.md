## API DOCUMENTATION

## getUserById

#### HTTP_METHOD
GET
#### URL
http://localhost:8090/api/user/5
#### REQUEST_PARAM
```js
    "id":5 
```
#### SUCESSS RESPONSE
```js
{
    "id": 5,
    "firstname": "ninad",
    "lastname": "chaudhary",
    "email": "ninadware@gmail.com",
    "phone": "3030303030",
    "created_at": "2024-08-24T04:12:09.000Z",
    "updated_at": "2024-08-24T06:24:24.000Z"
}
```

## registerUser

#### HTTP_METHOD
POST
#### URL
http://localhost:8090/api/user/register
#### REQUEST_BODY
```js
{
    "firstName": "manish",
    "lastName": "patil",
    "email": "manishpatil@gmail.com",
    "phone": "7777733333"
}
```
#### SUCESSS RESPONSE
```js
{
    "registedUser": {
        "firstname": "manish",
        "lastname": "patil",
        "email": "manishpatil@gmail.com",
        "phone": 7777733333
    }
}
```

## updateUser

#### HTTP_METHOD
PUT
#### URL
http://localhost:8090/api/user/update
#### REQUEST_BODY
```js
{
    "id":11,
    "firstName": "sachin",
    "lastName": "patil",
    "email": "patilsachin@gmail.com",
    "phone": "7667766788"
}
```
#### SUCESSS RESPONSE
```js
{
    "userData": {
        "firstname": "sachin",
        "lastName": "patil",
        "email": "patilsachin@gmail.com",
        "phone": 7667766788,
        "updated_at": "2024-08-24 13:41:08"
    }
}
```

## deleteUser

#### HTTP_METHOD
DELETE
#### URL
http://localhost:8090/api/user/delete/5
#### REQUEST_PARAM
```js
    "id":5 
```
#### SUCESSS RESPONSE
```js
{
    "data": "User ninad chaudhary is deleted"
}
```

## displayUsers

#### HTTP_METHOD
GET
#### URL
http://localhost:8090/api/users
#### REQUEST_BODY - 1
```js
{
    "lastName" : "patil",
    "firstName" : "kunal",
    "email": "chaudharychirag@gmail.com",
    "phone": "1111199999"
}
```
#### SUCCESS_RESPONSE - 1
```js 
{
    "userFilterList" : [
        "fistname" : ['userlist by first name'],
        "lastname" : ['userlist by last name'],
        "email" : ['userlist by email'],
        "phone" : ['userList by email']
    ]
}
```
#### REQUEST_BODY - 2
```js
{
    "lastName" : "patil",
}
```
#### SUCCESS_RESPONSE - 2
```js 
{
    "userFilterList" : [
        "lastname" : ['userlist by last name'],
    ]
}
```
#### REQUEST_BODY - 3
```js
// no request body (no filter option)
```
#### SUCCESS_RESPONSE - 3
```js 
{
    "userUnFilterList" : ['user list without filtered']
}