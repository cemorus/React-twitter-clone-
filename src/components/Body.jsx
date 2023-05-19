
const Body = ({tweet,body_image}) => {
  return (
    <>
          <p className="tweet-text">{tweet}</p>
          <img
             src={body_image}
            alt="Post Image"
           />
    </>
   
  )
}

export default Body