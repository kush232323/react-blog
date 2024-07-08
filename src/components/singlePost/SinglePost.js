import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img 
    src="https://images.pexels.com/photos/1058309/pexels-photo-1058309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         className="singlePostImg"
         />
         <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet,
          <div className="singlePostEdit">
          <i className="singlePostIcone fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcone fa-solid fa-trash-can"></i>
          </div>
      </h1>

      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Safak</b>
        </span>

        <span className="singlePostDate">1 hour ago
        </span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
          Sed condimentum consectetur quam, eu lacinia libero aliquam ut.
           Nulla facilisi. Vestibulum ante ipsum primis in faucibus orc
           i luctus et ultrices posuere cubilia Curae; Sed pretium sapien
            sit amet ligula efficitur feugiat.
            
        Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
          Sed condimentum consectetur quam, eu lacinia libero aliquam ut.
           Nulla facilisi. Vestibulum ante ipsum primis in faucibus orc
           i luctus et ultrices posuere cubilia Curae; Sed pretium sapien
            sit amet ligula efficitur feugiat.  
        Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
          Sed condimentum consectetur quam, eu lacinia libero aliquam ut.
           Nulla facilisi. Vestibulum ante ipsum primis in faucibus orc
           i luctus et ultrices posuere cubilia Curae; Sed pretium sapien
            sit amet ligula efficitur feugiat.  
        Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
          Sed condimentum consectetur quam, eu lacinia libero aliquam ut.
           Nulla facilisi. Vestibulum ante ipsum primis in faucibus orc
           i luctus et ultrices posuere cubilia Curae; Sed pretium sapien
            sit amet ligula efficitur feugiat.
             </p>
      </div>
    </div>
  )
}
