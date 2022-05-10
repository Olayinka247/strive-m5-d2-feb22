// *********************************************** USERS ENDPOINTS *********************************************

/* ********************************************* USERS CRUD ****************************************************

1. CREATE --> POST http://localhost:3001/users/ (+ body)
2. READ --> GET http://localhost:3001/users/ (+ optional query parameters)
3. READ (single user) --> GET http://localhost:3001/users/:userId
4. UPDATE (single user) --> PUT http://localhost:3001/users/:userId (+ body)
5. DELETE (single user) --> DELETE http://localhost:3001/users/:userId

*/

import express from "express"

const usersRouter = express.Router()

// 1.
usersRouter.post("/", (req, res) => {})

// 2.
usersRouter.get("/", (req, res) => {})

// 3.
usersRouter.get("/:userId", (req, res) => {})

// 4.
usersRouter.put("/:userId", (req, res) => {})

// 5.
usersRouter.delete("/:userId", (req, res) => {})

export default usersRouter
