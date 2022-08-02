const { handler } = await import('./.output/server/index.mjs')
import express from 'express'

const app = express()
const port = 8082
app.use(handler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})