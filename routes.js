// Description: This file contains all the routes for the application
const app =  require ( './server' );
const todos =  require ( './controllers/todos' );

app.get( '/' , todos.getTodos);
