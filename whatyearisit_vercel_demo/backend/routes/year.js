const express = require("express")
const router = express.Router()

console.log("On est dans /route/year")

router.get("/", (req, res) => {
  console.log("On est dans le main GET de route/year")
  const today = new Date()
  var actualYear = today.getFullYear().toString()
  console.log(actualYear)
  res.json({ year: actualYear })
})

module.exports = router
