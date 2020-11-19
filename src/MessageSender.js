import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React,{useState} from "react";
import "./MessageSender.css";
function MessageSender() {
    const[input,setInput]=useState('');
      const[ImgUrl,setImgurl]=useState('');
    const handleSubmit=(e)=>{
e.preventDefault();
   
 
      
   
     setImgurl("");
     setInput("");
    };
  return (
      
    <div className="messageSender">
         
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            className="messageSender_input"
            placeholder={"whats on your mind"}
            type="text"
          />
          <input 
          value={ImgUrl}
          onChange={(e)=>setImgurl( e.target.value)}
          placeholder="image URL (option)" />
      <button onClick={handleSubmit} type="submit">Hidden Button</button>
        </form>
      </div>
      <div className="messageSender_bottom">
      <div className="messageSender_option">
          <VideocamIcon style={{color:"red"}}/>
          <h3>Live Video</h3> </div>
          <div className="messageSender_option">
          <PhotoLibraryIcon style={{color:"green"}}/>
          <h3>Photo/Video</h3> </div>
          <div className="messageSender_option">
          <InsertEmoticonIcon style={{color:"orange"}}/>
          <h3>Feeling/Activity</h3> </div>
          </div>
    </div>
  );
}

export default MessageSender;
