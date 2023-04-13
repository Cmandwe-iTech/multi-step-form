import { useContext } from "react";
import { FormContext } from "../contextapi/formcontext";
import { useNavigate } from "react-router-dom";
const SocialInfo = () => {
  const { bio, setBio } = useContext(FormContext);
  const navigate = useNavigate()
  function submithandler(){
    if(bio.dob && bio.gender && bio.phone && bio.address){
        navigate("/personalinfo")
    }else{
        alert("all fields are mandatory")
    }
  }
  return (
    <div className="form-container">
      <div className="progressbar">
        <div className="num num1" onClick={()=>navigate("/")}>
          <p>1</p>
        </div>
        <div className="line"></div>
        <div className="num">
          <p>2</p>
        </div>
        <div className="line"></div>
        <div className="num">
          <p>3</p>
        </div>
      </div>
      <div className="form">
      <label htmlFor="dob">Date of Birth</label>
      <input
        type="date"
        id="dob"
        onChange={(e) => setBio({ ...bio, dob: e.target.value })}
      />
      <br />
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        id="gender"
        onChange={(e) => setBio({ ...bio, gender: e.target.value })}
      > <option>--select--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <label htmlFor="mob">Phone Number</label>
      <input
        type="number"
        id="mob"
        onChange={(e) => setBio({ ...bio, phone: e.target.value })}
      />
      <br />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        onChange={(e) => setBio({ ...bio, address: e.target.value })}
      />
      <br />
      <button onClick={submithandler}>next</button>
      </div>
      
    </div>
  );
};
export default SocialInfo;
