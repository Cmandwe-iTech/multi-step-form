import { useContext } from "react";
import { FormContext } from "../contextapi/formcontext";
import "./summary.css";
const Summary = () => {
  const { bio } = useContext(FormContext);
  return (
    <div className="summary">
      <h3>Details</h3>
      <p>firstname:- {bio.firstname}</p>
      <p>lastname:- {bio.lastname}</p>
      <p>email:- {bio.email}</p>
      <p>password:- {bio.password}</p>
      <p>Date of birth:- {bio.dob}</p>
      <p>gender:- {bio.gender}</p>
      <p>Phone number:- {bio.phone}</p>
      <p>Address:- {bio.address}</p>
      <p>Education Level:- {bio.education}</p>
      <p>Employment status:- {bio.employment}</p>
      <p>Annual income:- {bio.income}</p>
      <p>Marital status:- {bio.maritalstatus}</p>
    </div>
  );
};
export default Summary;
