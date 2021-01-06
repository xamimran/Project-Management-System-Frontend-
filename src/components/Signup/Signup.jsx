import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// Importing CSS
import styles from "./Signup.module.css";
import { Header } from "../Header/Header";

export const Signup = () => {
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   //=====
    
  const [fNameHelperText, setFNameHelperText] = useState("");
  const [lNameHelperText, setLNameHelperText] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

   //=====
 


  const submit = (e) => {
    e.preventDefault(); // Prevent Form from submitting

   //======
     // Validating 'first Name' and 'last Name'
        validateFName(fName);
        validateLName(lName);
   //======

    // First Validating 'password' and 'email'
    validatePasswordLength(password);
    validateEmail(email);
    

    if( fNameHelperText === ""   && lNameHelperText === ""  && email !== ""    && emailHelperText === "" && passwordHelperText === ""  ) {
      // Redirection Logic Comes Here
      console.log("Redirect");
    }
  };

  //====================
    // First  Name Validator
   const validateFName = (fn) => {
    setFName(fn); // update First Name
    
    // Empty Check
    if (fn === "") {
      setFNameHelperText("First Name is required");
    }
    // Valid First Name
    else {
      setFNameHelperText("");
    }
  };
   // Last Name Validator
   const validateLName = (ln) => {
    setLName(ln); // update Last Name
    
    // Empty Check
    if (ln === "") {
      setLNameHelperText("Last Name is required");
    }
    // Valid Last Name
    else {
      setLNameHelperText("");
    }
  };




  //=========================



  // Password Validator
  const validatePasswordLength = (pass) => {
    setPassword(pass); // Updating 'password'

    // Empty Check
    if (pass.length === 0) {
      setPasswordHelperText("Password is Required");
    }
    // Length Check
    else if (pass.length < 8) {
      setPasswordHelperText("Password is too short (minimum is 8 characters)");
    }
    // Password is Correct
    else {
      setPasswordHelperText("");
    }
  };

  // Email Validator
   const validateEmail = (m) => {
    setEmail(m);
    // Getting matched str
    let matchedStr = m.match(
      /[a-zA-Z0-9_.+-]+@[a-zA-Z]([a-zA-Z0-9]*[-.][a-zA-Z0-9]+)+/
    );

    // Empty Check
    if (m === "") {
      setEmailHelperText("Email is required");
    }
    // Matching Check
    else if (matchedStr && m === matchedStr[0]) {
      setEmailHelperText("");
    }
    // Valid E-mail
    else {
      setEmailHelperText("Email is not a valid email");
    }
  };

  
  return (
    <div>
      <Header/>
      <div className={`${styles.root} col-sm-8 col-md-5 mx-auto`}>
        <h1 className={styles.h1}>Sign Up</h1>
        <form action="/home" method="POST">
            {/*Fist and Last Name */  }
          <div className={`${styles.MainDiv} d-flex  mx-auto`}>
            <div className={styles.FNameField}>
                  <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="First name"
                required
                error={ fNameHelperText === "" ? false : true}
                helperText={fNameHelperText}
                onChange={(e) => validateFName(e.target.value)}
                placeholder="First Name"
                className="mb-2 mt-2"
                />{" "}
            </div>
            <div className={styles.LNameField}>
                  <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  label="Last name"
                  required
                  error={ lNameHelperText === "" ? false : true}
                  helperText={lNameHelperText}
                  onChange={(e) => validateLName(e.target.value)}
                  placeholder="Last Name"
                  className="mb-2 mt-2"
                  />{" "}
            </div>
            
          </div>
          
            {/*new stuff end */ }

          <TextField
            fullWidth
            type="email"
            variant="outlined"
            label="E-mail"
            required
            error={emailHelperText === "" ? false : true}
            helperText={emailHelperText}
            onChange={(e) => validateEmail(e.target.value)}
            placeholder="E-mail"
            className="mb-2 mt-2"
          />{" "}
          <br />
            <TextField
            fullWidth
            type="password"
            variant="outlined"
            label="Password"
            required
            error={passwordHelperText === "" ? false : true}
            helperText={passwordHelperText}
            onChange={(e) => validatePasswordLength(e.target.value)}
            placeholder="Password"
            className=" mb-2 mt-2"
          />{" "}
          <br />
          <p className={`${styles.p1} pt-2`}>
            Fields that are marked with * sign are required.
          </p>
          <Button
            size="large"
            fullWidth
            className={`${styles.submitButton} mb-3`}
            onClick={(e) => submit(e)}
            variant="contained"
          >
            SEND
          </Button>
          <p className={styles.p2}>
            Already have an account? {" "} 
            <a className={styles.a2} href="/signin">
               Sign In <ArrowRightAltIcon />{" "}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
