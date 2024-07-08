
import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
<div className="settingsTitle">
    <span className="settingsUpdateTitle">Update Your Account</span> 
    <span className="settingsDeleteTitle">Delete Account</span>
</div>
<form className="settingsForm">
<label>Profile Picture</label>
<div className="settingsPP">
    <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
    />
<label htmlFor="fileInput">
<i className="settingsPPicon far fa-user-circle"></i>

</label>
<input type="file" id="fileInput" style={{display:"none"}}/>
</div>
<label> Useruame</label>
<input type="text" placeholder="Safak" />

<label> Email</label>
<input type="email" placeholder="safakemail.com" />

<label> Password</label>
<input type="password"  />
<button className="settingsSubmit">Update</button>
</form>
        </div>
        <Sidebar/>
        </div>
  );
}
