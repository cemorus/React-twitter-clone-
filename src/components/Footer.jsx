import { useState } from "react";
import { useEffect } from "react";
const Footer = ()=>{
  const [isLiked, setIsLiked]= useState(false);
  const toggle =()=>{
    setIsLiked(isLiked=>!isLiked)
  }
  const LikeButton = ({toggle})=>{
    useEffect(() => {
      return () => {
        console.log("Like component unmounted");
      };
    }, []);
  }
    return(
        <>
         <div className="tweet-footer">
            <button className="btn-reply">Reply</button>
            <button className="btn-retweet">Retweet</button>
            <button className="btn-like" onClick={toggle}>{isLiked?"Unlike":"Like"}</button>
            <button className="btn-share">Share</button>
          </div>
        </>
    )
}

export default Footer;