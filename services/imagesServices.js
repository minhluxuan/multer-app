const Images = require("../database/Images");

const createNewImage = async (file) => {
    return await Images.createNewImage(file);
}

module.exports = {
    createNewImage,
}