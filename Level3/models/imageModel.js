const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    public_id: { type: String, required: true, trim: true },
    secure_url: { type: String, required: true, trim: true }
})

const imageModel = mongoose.models.image_tbs || mongoose.model("image_tbs", imageSchema);
module.exports = imageModel;