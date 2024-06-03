const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const Note=require('../note.js');

router.get('/fetchall',  async (req, res) => {
  const skip = req.query.skip ? Number(req.query.skip) : 0;
	const DEFAULT_LIMIT = 10;

	try {
		const posts = await Note.find({}).skip(skip).limit(DEFAULT_LIMIT);

		res.status(200).json({
			success: true,
			data: posts,
		});
	} catch (error) {
		res.status(400).json({
			error: `Error getting posts: ${error.message}`,
		});
	}
  });

  
  


  module.exports=router;