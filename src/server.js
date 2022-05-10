// const express = require('express') <-- OLD SYNTAX
import express from "express" // <-- NEW IMPORT SYNTAX (remember to add type: "module" to package.json to use it!)
import usersRouter from "./apis/users/index.js"
import booksRouter from "./apis/books/index.js"

const server = express()

const port = 3001

// *********************** ENDPOINTS ****************************

server.use("/users", usersRouter)
// server.use("/books", booksRouter)

server.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})
