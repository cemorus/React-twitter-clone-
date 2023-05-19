const Header = ({name ,username,profile_image})=>{
    return(
        <>
        <div className="tweet-header">
        <img
           src={profile_image}
            alt="User Avatar"
         width={50}
           height={50}
          />
        <div className="tweet-content">
          <div className="tweet-header">
            <h3 className="username">{name}</h3>
            <span className="handle">@{username}</span>
            <span className="timestamp">- 5h</span>
          </div>
          </div>
        </div>
        
        </>
    )
}
export default Header;