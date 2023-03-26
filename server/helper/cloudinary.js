import { v2 as cloudinary } from 'cloudinary';

// Configuration 
cloudinary.config({
    cloud_name: "dphupdpda",
    api_key: "479783752453473",
    api_secret: "86et_J0XdIyRTbfPDnprc8avpS4"
});

const photoUrl = await cloudinary.uploader.upload(photo)





// Generate 
// const url = cloudinary.url("olympic_flag", {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
// });

return url