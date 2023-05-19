import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Createtweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [shouldRefresh, setShouldRefresh]= useState(False);
  const handleSubmit = () => {
    upload();
  };
  const upload = async()=>{
    await axios.post("https://react-workshop.fly.dev/",{
      authorname: "Sushant Chaulagai ",
      avatar :"",
      content : tweetContent,
      image :imageLink
    });
  }
  return (
    <>
      <div className="tweetarea">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write MF"
          required
          onChange={(e) => setTweetContent(e.target.value)}
        ></textarea>
        <input type="text"  placeholder="Enter image link" onChange={(e) => setImageLink(e.target.value)}/>
        <div className="tweetcontrols">
          <span id="char-count">200</span>
          <button className="upload" onClick={handleSubmit}>
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default Createtweet;
