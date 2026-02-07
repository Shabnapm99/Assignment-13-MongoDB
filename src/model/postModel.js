import {Schema} from 'mongoose';

const postSchema = new Schema({
title:{
    type:String,
    minLength:3,
    trim:true,
    required:true
},
content:{
    type:String,
    minLength:3,
    trim:true,
    required:true
}
});

const PostModel = mongoose.model('Post',postSchema);

export default PostModel;