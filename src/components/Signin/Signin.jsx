import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// Importing CSS
import styles from "./Signin.module.css";

export const Signin = () => {
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Prevent Form from submitting

    // First Validating 'password' and 'email'
    validatePasswordLength(password);
    validateEmail(email);

    if (email !== "" && emailHelperText === "" && passwordHelperText === "") {
      // Redirection Logic Comes Here
      console.log("Redirect");
    }
  };

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
    <div className={`${styles.root} col-sm-8 col-md-5 mx-auto`}>
      <h1 className={styles.h1}>Sign in</h1>
      <p>
        <span className={styles.span1}>Don't have an account?</span>
        <a className={styles.a1} href="/signup">
          Sign up <ArrowRightAltIcon />
        </a>
      </p>
      <form action="/home" method="POST">
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
          className="mb-3 mt-3"
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
          className="mb-2"
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
        <p>
          Forgot your password?
          <a className={styles.a2} href="/passwordReset">
            Reset password <ArrowRightAltIcon />{" "}
          </a>
        </p>
      </form>
    </div>
  );
};
