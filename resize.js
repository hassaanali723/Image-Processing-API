const fs = require('fs');
const sharp = require('sharp');


module.exports = resize = (path,format,width,height) =>{
    try{
    const rs =  fs.createReadStream(path);
    let imageresize = sharp();
    if(format){
        resized =  imageresize.toFormat(format);
    }

    if (width || height){
        
        resized =  imageresize.resize(width,height,{
            fit:'fill'
        }); 
    }
    return rs.pipe(resized);

}catch(error){
    console.log(error);
}

}



