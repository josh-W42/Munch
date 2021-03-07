const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
  header: String,
  content: String,
  date: Date,
});

const postSchema = new mongoose.Schema(
  {
    restaraunt: [
      { type: mongoose.Schema.Types.restarauntId, ref: "Restaraunt" },
    ],
    customer: [{ type: mongoose.Schema.Types.usertId, ref: "User" }],
    comments: [commentSchema],
    postImg: [String],
    totalSpent: Number,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;