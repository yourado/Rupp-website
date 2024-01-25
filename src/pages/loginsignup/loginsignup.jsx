import React, { useState } from 'react';
import './loginsignup.css';



const Loginsignup = () => {
    const [action,setAction] = useState("Sign Up");

    return (
        <div className='loginsignup-page'>
         <header className='height-20'></header>
            <div className='container2'>
                <div className='header2'>
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <input type="text" placeholder='Full Name'/>
                        </div>}
                    
                    {action==="Login"?<div></div>:<div className="input-gender">
            
                            <label>Gender</label><br />
                            <input className='input-gender1' id='male' type="radio" name='gender'/><label for="male">Male</label>
                            <input className='input-gender1'id='female' type="radio" name='gender'/><label for="female">Female</label>
                            <input className='input-gender1' id='other' type="radio" name='gender'/><label for="other">Other</label>
                        </div>}
                    
                    {action==="Login"?<div></div>:<div className="input-faculty">
                        
                        <label for="faculty">Faculty: </label>

                        <select name="faculty" id="faculty">
                        <option hidden value="select">---Select Faculty---</option>
                        <option value="science">Faculy of Science</option>
                        <option value="social">Faculy of Social Science and Humanities</option>
                        <option value="engineering">Faculy of Engineering</option>
                        <option value="development">Faculy of Development Studies</option>
                        <option value="education">Faculy of Education</option>
                        <option value="ifl">Institte of Foreign Language</option>
                        <option value="IR">Institte of International Studies and Public Policy</option>
                        </select>
                    </div>}
                    
                    
                    <div className="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                        </svg>
                        <input type="email" placeholder='Enter Your Email'/>
                    </div>
                    <div className="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock2-fill" viewBox="0 0 16 16">
                        <path d="M7 6a1 1 0 0 1 2 0v1H7z"/>
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
                        </svg>
                        <input type="password" placeholder='Enter Password'/>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray" : "submit"} onClick={()=>{setAction("Login")}} >Login</div>
                </div>
            </div>

</div>
    )
}

export default Loginsignup;