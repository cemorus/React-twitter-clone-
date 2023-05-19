import Header from "./Header";
import Body from "./Body";
import Footer from "./footer";
import { useEffect } from "react";
const Tweet = ({name ,username,tweet,body_image,profile_image}) => {
 
  return (
    
    <div className="tweet">
    <Header name={name} username={username} profile_image={profile_image}/>
     <Body tweet={tweet} body_image={body_image}/>
    <Footer />
    </div>
  )
}

export default Tweet;