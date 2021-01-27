import PostModel from "../models/postModel.js";
import mongoose from 'mongoose'

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
    res.status(409).json({ msg: error.message })
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params
  const post = req.body
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${ id }`)
  const updatedPost = await PostModel.findByIdAndUpdate(id, { ...post, id }, { new: true })
  res.json(updatedPost)
};

export const deletePost = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${ id }`)
  await PostModel.findByIdAndRemove(id)
  res.json({ msg: 'Post deleted successfully' })
};

export const likePost = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${ id }`)
  const post = await PostModel.findById(id)
  const updatedPost = await PostModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
  res.json(updatedPost)
}
