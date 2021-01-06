import React from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { TextField, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import { Header } from '../Header/Header';
// importing CSS
import styles from './OTP.module.css';


export const OTP = () => {
    const submit = (e) => {
        e.preventDefault(); // Prevent Form from submitting
    };


    return (
        <div className={styles.root}>
            <Header/>

        <div className={`${styles.root} col-sm-8 col-md-5 mx-auto`}>

        <h1 className={styles.h1}>Verify Mobile Number</h1>
        <p>
          <span className={styles.ph6}>
            OTP has been sent to your E-mail please enter it below
          </span>
        </p>
        <form action="/home" method="POST">
            <TextField id="standard-basic"  fullWidth
            type="email"
            variant="outlined"
            label="OTP"
            required
            placeholder="CODE"
            className="mb-3 mt-3" />
        <Button
                 variant="contained"
                color="secondary"
                size="large"
                endIcon={<AutorenewIcon/>}
        >
        Re-Send OTP
      </Button>
      {" "}
    <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<Icon>send</Icon>}
              onClick={(e) => submit(e)}
              >
              Send
             </Button>

        </form>


    </div>
            
            
    </div>
    )
}
