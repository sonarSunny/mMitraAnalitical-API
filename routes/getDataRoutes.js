const express               = require('express');
const router                = express.Router();
const getDataController		=require('../controllers/getDataControllers');
router.get('/',
    
    getDataController.getData
)
// router.post('/add_city',
//     cityController.add_city
// )
// router.post('/delete_city',
// cityController.delete_city
// )
module.exports = router;