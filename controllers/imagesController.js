const imagesServices = require("../services/imagesServices");

const renderUI = (req, res) => {
    return res.render("image")
}

const createNewImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: true,
            message: "Không tìm thấy ảnh. Vui lòng thử lại!",
        });
    }

    return res.status(200).json({
        error: true,
        message: "Lưu thành công!",
    });
}


module.exports = {
    renderUI,
    createNewImage,
}