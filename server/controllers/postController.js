import PostModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostModel.find();
    res.status(200).json(postMessages)
  } catch( error ) {
    res.status(404).json({ msg: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost)
  } catch( error ) {
    res.status(409).json({msg: error.message})
  }
};

export const updatePost = (req, res) => {

};

export const deletePost = (req, res) => {

};
