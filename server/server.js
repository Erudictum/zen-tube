import express from "express"
import cors from "cors"
import fetch from "node-fetch"
import * as dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY_ENV
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&videoEmbeddable=true&maxResults=6&regionCode=BR&q=`

app.get('/', (req, res) => {
    fetch(`${API_URL}${req.query.term}`)
    .then(response => response.json())
    .then(data => res.send(data))
})

app.listen(3000)
