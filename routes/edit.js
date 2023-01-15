const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) //get the edit page with the item id that we want to edit
router.get('/remove/:id', editController.deleteItem) //deletes the item
router.post('/update/:id', editController.updateItem) //updates the item using data passed in from the form


module.exports = router