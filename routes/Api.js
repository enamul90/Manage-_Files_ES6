import express from 'express';
const router = express.Router();

import * as UploadFile from '../app/controllers/UploadFileController.js';


router.post('/upload-single-file',  UploadFile.UploadSingleFile)
router.post('/upload-multiple-file',  UploadFile.UploadMultipleFile)
router.get('/read-file/:fileName',UploadFile.ReadFile)
router.delete('/delete-single-file/:fileName',UploadFile.SingleDelete)
router.delete('/delete-multiple-file',UploadFile.MultipleDelete)









export default router;