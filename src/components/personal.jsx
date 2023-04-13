import { useContext } from "react";
import { FormContext } from "../contextapi/formcontext";
import { useNavigate } from "react-router-dom";
const PersonalInfo = () => {
  const { bio, setBio } = useContext(FormContext);
  const navigate = useNavigate()
  function submithandler(){
    if(bio.education && bio.employment && bio.income && bio.maritalstatus){
        navigate("/summary")
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
        <div className="num num1" onClick={()=>navigate("/socialinfo")}>
          <p>2</p>
        </div>
        <div className="line"></div>
        <div className="num">
          <p>3</p>
        </div>
      </div>
    <div className="form">
      <label htmlFor="edu">Education Level</label>
      <select
        name="education"
        id="edu"
        onChange={(e) => setBio({ ...bio, education: e.target.value })}
      > <option>--select--</option>
        <option value="postgraduate">Postgraduate</option>
        <option value="graduate">Graduate</option>
        <option value="diploma">Diploma</option>
      </select>
      <br />
      <label htmlFor="status">Employment Status</label>
      <select
        name="status"
        id="status"
        onChange={(e) => setBio({ ...bio, employment: e.target.value })}
      > <option>--select--</option>
        <option value="web developer">Web Developer</option>
        <option value="frontend developer">Frontend Developer</option>
        <option value="backend developer">Backend Developer</option>
      </select>
      <br />
      <label htmlFor="income">Annual Income</label>
      <select
        name="income"
        id="income"
        onChange={(e) => setBio({ ...bio, income: e.target.value })}
      > <option>--select--</option>
        <option value="3-5 lakh per annum">3-5 lakh per annum</option>
        <option value="6-8 lakh per annum">5-7 lakh per annum</option>
        <option value="9-14 lakh per annum">7-9 lakh per annum</option>
        <option value="15 lakh per annum & above">
          9-11 lakh per annum & above
        </option>
      </select>
      <br />
      <label htmlFor="marital">Marital Status</label>
      <select
        name="marital"
        id="marital"
        onChange={(e) => setBio({ ...bio, maritalstatus: e.target.value })}
      > <option>--select--</option>
        <option value="married">Married</option>
        <option value="unmarried">Unmarried</option>
        <option value="divorced">Divorced</option>
        <option value="widow">Widow</option>
      </select>
      <br />
     <button onClick={submithandler}>next</button>
    </div>
    </div>
  );
};
export default PersonalInfo;
