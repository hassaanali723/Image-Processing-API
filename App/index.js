const resize = require('../resize');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp');
const app =  express();
const PORT = process.env.PORT || 5000;


app.get('/images',(req,res) => {
    const imagewidth = parseInt(req.query.width);
    const imageheight = parseInt(req.query.height);
    const imageformat = parseInt(req.query.format);
    
    
    if (imagewidth || imageheight){
    res.type(`image/${imageformat || 'png'}`);
    resize('./public/hoodie.jpg',imageformat,imagewidth,imageheight).pipe(res);
    
    
} else{
   res.type('image/png');
   fs.createReadStream('./public/hoodie.jpg').pipe(res);
}
 });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})