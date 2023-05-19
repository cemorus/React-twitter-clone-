import { useEffect } from "react";
import { useState } from "react";
import "./App.css"
import axios from "axios";
import Createtweet from "./components/Createtweet";
import Tweet from "./components/Tweet";



const App = () => {
  const [tweets, setTweets]= useState([]);
  
  useEffect(()=>{fetchTweets();},[]);

  const fetchTweets = async ()=>{
    const posts = await axios.get("https://react-workshop.fly.dev/");
    setTweets(posts.data);
  }
  // let names = ["ram","rere","fer"];
  // let newNames = names.map(element => element + "tree");
  // console.log(newNames);

  return(
    <>
   <Createtweet />
    {
      tweets.map((tweet)=> <Tweet name={tweet.authorname} 
      username={tweet.authorname} 
      tweet={tweet.content} 
      body_image={tweet.image}
      profile_image={tweet.avatar}/>)
    }
    {/* <Tweet name={tweet.authorname} 
    username={tweet.authorname} 
    tweet={tweet.content} 
    body_image={tweet.image}
    profile_image={tweet.avatar}/> */}
    </>
  
 )
};

export default App;

/*
<Tweet name={data[1].name} 
    username={data[1].username} 
    tweet={"love you 3000!"} 
    body_image={"https://th.bing.com/th/id/OIP.eF5BfQqhjJSCtKKyNxKTMAHaEK?pid=ImgDet&rs=1"}
    profile_image={"https://media.comicbook.com/2019/08/morgan-stark-endgame-1182799-1280x0.jpeg"}/>
    
    <Tweet name={"Tanjiro"} 
    username={"kamado"} 
    tweet={"Nezuko chan"} 
    body_image={"https://th.bing.com/th/id/R.4ecc57708fc7921f97e4e5ba89a3e559?rik=ATev2n0d34cLYw&pid=ImgRaw&r=0"}
    profile_image={"https://i.pinimg.com/originals/00/a8/d1/00a8d1601c1afbe8693bcf8158c7a98b.jpg"}
    />
    
    <Tweet name={"raes"} 
    username={"khan"} 
    tweet={"Insaallah!!"} 
    body_image={"https://th.bing.com/th/id/OIP.mRy2xkbDui5YTJmtanCgpQHaE3?pid=ImgDet&rs=1"}
    profile_image={"https://www.nydailynews.com/resizer/GuW54yOJDL2CdxmGrU4oOkxteCU=/1200x888/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/2VCYAVQU257O72D72BILYCRYMA.jpg"}/>*/

