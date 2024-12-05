const express = require('express');
const morgan = require('morgan');
const urlRoute = require('./router/url');
const URL = require('./models/url');
require('dotenv').config();

const {connectToMongoDB} = require('./connect');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use('/url',urlRoute);

app.get('/:shortId',(req,res)=>{
   const {shortId} = req.params;
   
})

const PORT = process.env.PORT || '8001';

console.log(process.env.MONGO_URL, "this is the mongoURL");
connectToMongoDB(process.env.MONGO_URL);





app.get('/visit/:shortId', async (req, res) => {
   try {
      // Ensure that 'shortId' is retrieved from the request parameters
      const {shortId} = req.params; // or req.params.shortId or however you retrieve it
      const shortUrl = await URL.findOneAndUpdate(
         { shortId },
         {
            $push: {
               visitHistory: {
                  timestamp: Date.now(),
               },
            },
         },
         { new: true } // To return the updated document
      );

      // Check if shortUrl is found
      if (!shortUrl) {
         return res.status(404).json({ error: 'Short URL not found' });
      }

      console.log(shortUrl.redirectUrl, "this is the redirect URL");
      res.redirect(shortUrl.redirectUrl);
   } catch (error) {
      console.error("this is the error", error);
      return res.status(500).json({ error: 'Internal Server Error' });
   }
});


app.listen(PORT,() => console.log(`Server Started at PORT: ${PORT}`));

