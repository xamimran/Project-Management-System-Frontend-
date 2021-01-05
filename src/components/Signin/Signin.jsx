import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// Importing CSS
import styles from "./Signin.module.css";

export const Signin = () => {
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  let email = "";
  let password = "";

  const submit = (e) => {
    e.preventDefault();
    console.log("Password : ", password, "Email :", email);

    validatePasswordLength(password);
    validateEmail(email);

    if (email !== "" && emailHelperText === "" && passwordHelperText === "") {
      console.log("Redirect");
    }
  };

  // Password Validator
  const validatePasswordLength = (pass) => {
    password = pass;

    if (password.length === 0) {
      setPasswordHelperText("Password is Required");
    } else if (password.length < 8) {
      setPasswordHelperText("Password is too short (minimum is 8 characters)");
    } else {
      setPasswordHelperText("");
    }
  };

  // Email Validator
  const validateEmail = (m) => {
    email = m;

    if (email === "") {
      setEmailHelperText("Email is required");
    } else if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailHelperText("");
    } else {
      setEmailHelperText("Email is not a valid email");
    }
  };

  return (
    <div className={`${styles.root} col-5 mx-auto`}>
      <h1 className={styles.h1}>Sign in</h1>
      <p>
        <span className={styles.greyColor}>Don't have an account?</span>
        <a className={styles.a} style={{fontSize: "20px"}} >
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
          className="mb-3"
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
        />{" "}
        <br />
        <p className={`${styles.leftAlign} ${styles.greyColor} pt-2`}>
          Fields that are marked with * sign are required.
        </p>
        <Button
          size="large"
          fullWidth
          className={`${styles.button} mb-2`}
          onClick={(e) => submit(e)}
          variant="contained"
        >
          SEND
        </Button>
        <p>
          Forgot your password?
          <a className={styles.a}>
            Reset password <ArrowRightAltIcon />{" "}
          </a>
        </p>
      </form>
    </div>
  );
};
