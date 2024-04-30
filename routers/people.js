const express = require('express')
const router = express.Router()
const peopleControllers = require('../controllers/people')

router.get("/", peopleControllers.list)
router.get("/:id", peopleControllers.show);
router.post("/", peopleControllers.create);
router.put("/:id", peopleControllers.update)
router.delete("/:id", peopleControllers.remove)

module.exports = router