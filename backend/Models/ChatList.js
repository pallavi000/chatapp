const mongoose = require('mongoose');

const ChatListSchema = new mongoose.Schema({
  sender_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'},
  receiver_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'},
  last_message:{type:String}
},{
    timestamps: true,
});

const ChatList = mongoose.model('chatlist', ChatListSchema)

module.exports = ChatList