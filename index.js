const express = require('express');
const userController = require('./controllers/user');
const db = require('./db')
const postController = require('./controllers/post')

const app = express();

app.use(express.json());

app.post('/user', userController.createUser)
app.get('/user', userController.getUsers)
app.get('/user/:id', userController.getOneUser)
app.put('/user', userController.updateUser)
app.delete('/user/:id', userController.deleteUser)

app.post('/post', postController.createPost)
app.get('/post', postController.getPostsByUser)


app.listen(8080, () => {
	console.log('server running on port');
})