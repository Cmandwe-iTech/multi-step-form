import { useContext } from "react";
import { FormContext } from "../contextapi/formcontext";
import { useNavigate } from "react-router-dom";
import "./basic.css"
const BasicInfo = () => {
  const { bio, setBio } = useContext(FormContext);
  const navigate = useNavigate();
  function submitHandler() {
    if (bio.firstname && bio.lastname && bio.email && bio.password.length >= 5 && bio.password.length <= 15) {
      navigate("/socialinfo");
    } else {
      alert("all fields are mandatory and password neither be less than 5 characters nor be more than 15 characters ");
    }
  }
  return (
    <div className="form-container">
      <div className="progressbar">
        <div className="num" onClick={()=>navigate("/")}>
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
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          onChange={(e) => setBio({ ...bio, firstname: e.target.value })}
        />
        <br />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          onChange={(e) => setBio({ ...bio, lastname: e.target.value })}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setBio({ ...bio, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setBio({ ...bio, password: e.target.value })}
        />
        <br />
        <button onClick={submitHandler}>next</button>
      </div>
    </div>
  );
};
export default BasicInfo;
