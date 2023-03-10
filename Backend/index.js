const express = require("express")
const session = require("express-session")

const port = 3000
var path = require("path")
const app = express()

app.use(session)

app.get("/")