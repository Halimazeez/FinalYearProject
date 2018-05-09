import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { login, resetPassword } from "../helpers/auth";
import Typography from "material-ui/Typography";
import history from "../helpers/history";
import { firebaseAuth } from "../helpers/dbCon";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginError: null
    };
  }

  //inline error message with event
  setErrorMsg = error => {
    this.setState({ loginError: error.message });
  };

  //global onchange for state
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    //reset the error if exist
    if (this.state.loginError != null) {
      this.setState({ loginError: null });
    }
  };

  // submit login form with username and password
  onSubmit = e => {
    e.preventDefault();
    login(this.state.email, this.state.password).catch(error => {
      this.setErrorMsg(error);
    });
  };

  render() {
    //console.log(JSON.stringify(this.state));
    return (
      <form style={styles.container} onSubmit={this.onSubmit}>
        <Paper style={styles.paper}>
          <Typography variant="title" color="inherit" style={styles.typo}>
            Login
          </Typography>
          <TextField
            id="email"
            label="Email"
            placeholder="Enter your email"
            style={styles.textField}
            value={this.state.email}
            onChange={this.onChange}
            type="email"
          />
          <TextField
            id="password"
            label="Password"
            style={styles.textField}
            value={this.state.password}
            type="password"
            onChange={this.onChange}
          />
          {this.state.loginError && (
            <div>
              <p>Error:{this.state.loginError}</p>
            </div>
          )}
          <div style={styles.buttons}>
            <Button
              type="submit"
              style={styles.button}
              variant="raised"
              color="primary"
            >
              Login
            </Button>

            <Link to="/register" style={styles.link}>
              <Button style={styles.button} variant="raised" color="secondary">
                Register
              </Button>
            </Link>
          </div>
        </Paper>
      </form>
    );
  }
}
const styles = {
  textField: {
    width: 300,
    marginTop: 0,
    marginBottom: 10
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 320,
    maxWidth: 400,
    height: "auto",
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    margin: "auto",
    textAlign: "center"
  },
  paper: {
    padding: 20,
    overflow: "auto"
  },
  button: {
    width: 300,
    marginBottom: 10
  },
  buttons: {
    marginTop: 5
  },
  typo: {
    fontSize: 30
  },

  link: {
    color: "inherit",
    textDecoration: "none"
  }
};
