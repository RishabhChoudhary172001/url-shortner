const {nanoid} = require('nanoid');
const URL = require('../models/url');

const handleGenerateNewShortURL=(async(req, res)=>{
  const {url} = req.body;
  if(!url){
    return res.status(400).json({message:"url is missing in the body!"});
  }
  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: url,
    visitHistory: [],
  })
  
  return res.json({id: shortId});
})

const viewAnalytics = (async(req,res)=>{
  try{
    const {shortId} = req.params;
    const result = await URL.findOne({shortId});
    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory });
  }catch(error){
    console.error(error);
    return res.status(500).json({error});
  }
})

module.exports = {
    handleGenerateNewShortURL,
    viewAnalytics
}