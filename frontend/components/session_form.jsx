import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    // { loggedIn, errors, formType, processForm }
    super(props);

    this.state = {username: "", password: ""};

    // Need to bind?
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Shouldn't this be { user: {username, password} } ?
    const user = { user: this.state };
    debugger
    this.props.processForm(user);
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/"/>;
    }

    let headerText;
    let link;
    let footerText;
    if (this.props.formType === 'login') {
      headerText = "Log In";
      footerText = "Not a member yet?";
      link = (<Link to="/signup">Sign Up</Link>);
    } else {
      headerText = "Sign Up";
      footerText = "Already signed up?";
      link = (<Link to="/login">Log In</Link>);
    }

    return(
      <div className="auth-form">
        <h1>{headerText}</h1>

        <form>
          <ul>
            {this.props.errors.map((error) => <li>error</li>)}
          </ul>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}></input>

          <button id="submit" onClick={this.handleSubmit}>{headerText}</button>
        </form>

        <div>{footerText}</div>
        {link}
      </div>
    );
  }
}

export default withRouter(SessionForm);
