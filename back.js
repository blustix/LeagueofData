const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    const userID = req.query.search
    console.log(req.query.search)
    axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ userID + '?api_key=' 
    + process.env.RIOT_API_KEY_DEV).then((response) => {res.json(response.data)})
})

app.listen(8000, () => console.log(`Server is running on ${PORT}`))