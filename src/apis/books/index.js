// *********************************************** BOOKS ENDPOINTS *********************************************

/* ********************************************* BOOKS CRUD ****************************************************

1. CREATE --> POST http://localhost:3001/books/ (+ body)
2. READ --> GET http://localhost:3001/books/ (+ optional query parameters)
3. READ (single user) --> GET http://localhost:3001/books/:userId
4. UPDATE (single user) --> PUT http://localhost:3001/books/:userId (+ body)
5. DELETE (single user) --> DELETE http://localhost:3001/books/:userId

*/

import express from "express"
import fs from "fs" // CORE MODULE (no need to be installed!)
import { fileURLToPath } from "url" // CORE MODULE
import { dirname, join } from "path" // CORE MODULE

const booksRouter = express.Router()

const booksJSONPath = join(dirname(fileURLToPath(import.meta.url)), "books.json")

// 1.
booksRouter.post("/", (req, res) => {})

// 2.
booksRouter.get("/", (req, res) => {})

// 3.
booksRouter.get("/:bookId", (req, res) => {})

// 4.
booksRouter.put("/:bookId", (req, res) => {})

// 5.
booksRouter.delete("/:bookId", (req, res) => {})

export default booksRouter
