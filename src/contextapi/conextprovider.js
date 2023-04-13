import { useState } from "react";
import { FormContext } from "./formcontext";

const FromProvider = (props) => {
  const [bio, setBio] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    education: "",
    employment: "",
    income: "",
    maritalstatus: "",
  });
  return (
    <FormContext.Provider value={{ bio, setBio }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FromProvider;
