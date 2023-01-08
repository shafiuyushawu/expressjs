var express = require('express')

var router = express.Router()

// /users
router.get('/', (req, res) => {
  res.send('Get users page')
})

// /users/get-user-details
router.get('/get-user-details', (req, res) => {
  res.send('Get user details page')
})

// /users/create-users
router.post('/create-users', (req, res) => {
  res.send('Create users')
})

// /users/update-users
router.put('/update-users', (req, res) => {
  res.send('Update user details')
})

// /users/delete-user
router.delete('/delete-user', (req, res) => {
  res.send('Delete user details')
})

//users/patch-users
router.patch('/patch-user', (req, res) => {
  res.send('Delete user details')
})

module.exports = router
