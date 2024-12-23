const { Router } = require("express");
const router = Router();
const { addCareers, deleteCareers, getCareersById, updateCareers,getAdminCareers,getCareers 
 } = require('../controllers/careersController');    
const { upload } = require('../middlewares/multer');

router.post('/', upload.array('images', 10), addCareers);  
router.get('/adminCareers', getAdminCareers);
router.delete('/:id',  deleteCareers);
router.get('/:id', getCareersById);
router.patch('/', upload.array('images', 10), updateCareers);
router.get('/', getCareers);

module.exports = router;
