import express, { Request, Response } from "express";
import {MEMBERS} from "./members.props"

const PORT = 3000;

const app = express()

app.get('/', (request: Request, response: Response) => {
    response.json(MEMBERS)
})

app.listen(PORT, () => {
    console.log(`Server startet on port ${PORT}`)
})