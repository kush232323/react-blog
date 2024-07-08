import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
<div className="sidebarItem">
<span className="sidebarTitle">ABOUT ME</span>
<img className="sidebarim" src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
<p>Bay of Bengal on the southeast.
   It has six neighbors: Pakistan in the north-west,
   China, Nepal.  

</p>
</div>
<div className="sidebarItem"> 

<span className="sidebarTitle">CATEGORIES</span>
<ul className="sidebarList">
  <li className="sidebarListItem">Life</li>
  <li className="sidebarListItem">Music</li>
  <li className="sidebarListItem">style</li>
  <li className="sidebarListItem">sport</li>
  <li className="sidebarListItem">Teck</li>
  <li className="sidebarListItem">Cinema</li>
</ul>
</div>
<div className="sidebarItem">


<span className="sidebarTitle">FOLLOW US</span>
<div className="sidebarSocial">

      <i className="sidebarIcon  fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon  fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon  fa-brands fa-square-pinterest"></i>
      <i className=" sidebarIcon fa-brands fa-square-instagram"></i>


</div>




</div>
    </div>
  )
}
