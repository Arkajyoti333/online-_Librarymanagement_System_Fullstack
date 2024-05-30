import mongoose from "mongoose";

const readMoreSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  pdfFile: {
    type: String,
    required: true,
  },
});

const ReadMore = mongoose.model("ReadMore", readMoreSchema);
export default ReadMore;
