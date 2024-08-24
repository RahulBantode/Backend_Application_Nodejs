# Backend Application (user management)

## Steps to install and setup

1. node / npm / mysql client or mysql workbench should be installed on machine.

2. using `git clone` command clone the repository.

3. hit command as `npm install or npm i` to install all dependencies. If incase you get an error like 'sequelize' not found then first check package.json file devDependencies section sequelize-cli present or not, if not then explicity installed `npm i sequelize-cli` 

4. After installing mysql do some configurations.
    1. First you need to setup mysql client/workbench and create one schema, then table will be created by migration script, but for
       that you need to have one schema in DB.
    
    2. In .env file there is DATABASE_URL variable present e.g `Mysql://root:Root@098@localhost:3306/user_management`
       Here you need configure your user, password, and database name as follows,
        `Mysql://<your_mysql_username>:<your_mysql_password>@localhost:3306/<your_database_name>`
    
    3. And also do this changes in database migration config.json file (path :- `src/db-migrations/config/config.json`)
       in development key.
       ```js
        "development": {
        "username": "<your_mysql_username>", 
        "password": "<your_mysql_password>",
        "database": "<your_database_name>",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
       ```
        Note :- `Try to give database name same as user_management for simplicity.

5. Hit command as npm start (it will first internally run the migration command and start the server).

6. To see more about API please follow this this documentation file `API_DOCS.md`

7. Try to import this postman collection `postman_collection/Backend_Application_nodejs.postman_collection.json` into your postman application


## Basic flow of application

1. After successful connection of database, backend server initialize the routes and server start listening on port `8090`

2. When the request comes to server from UI it first goes in routes `apiRoutes.js` file.

3. Then according to the request url and request method it goes to specific route, all routes are listen in `apiRouter.js` file.

4. Suppose we consider that request URL is `http://localhost:8090/api/user/register` to register the user.

5. Now we see how step by step router parameter get executed.

    Router for registerUser
    ```js
    userRouter.post(
        '/user/register',
        userValidationRule.registerUser,
        requestValidation,
        userController.registerUser
    );
    ```

    1. First parameter of userRouter.post method is path of registerUser service.
    2. Second paramter of this method is middleware object which are getting the registerUser request validation rule, which i defined and save it into the req. object.
    3. Third paramter of this method is middleware function which is actually validate the request body data with respect to the validation rules which we have passed/defined. If the request data is validated successfully then by the help of express inbuilt middleware function `next()` we can pass control to the registerUser controller. and If request data is not validated then we send error response back to the UI with appropriate error message and error status.
    4. Fourth paramter of this method is calling the registerUser controller.

6. Controller have all the services listed according to the controller.registerUser call registerUserService get called and it started
   its execution and according to conditon sending error response or if not any error encountered then respond with success to UI.