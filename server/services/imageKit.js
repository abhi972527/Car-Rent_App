import ImageKit from 'imagekit';

const imagekit = new ImageKit({
    publicKey: 'public_tH8lPngUP5XriwgZ6KECpuv/r5I=',
    privateKey: 'private_B2Z4u1V0k4zvy7CtR2HfX/40KfE=',
    urlEndpoint: 'https://ik.imagekit.io/carRent',
});

export const uploadImage = async (buffer, filename, folder) => {
    try {
        const url = await imagekit.upload({
            file: buffer,
            fileName: filename,
            folder: folder,
            transformation: [{ "format": "jpg" }]
        })
        console.log("🚀 ~ file: imageKit.js:33 ~ uploadImage ~ url:", url)
        return url.url;
    } catch (error) {
        return false;
    }
}