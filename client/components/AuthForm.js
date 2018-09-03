import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const { email, password } = this.state
    this.props.onSubmit(email, password)

  }
  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              name="email"
              placeholder="Email" 
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="input-field">
            <input
              name="password"
              placeholder="password"
              type="password" 
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="errors">
            {this.props.errors.map((error, index)=> <div key={index}>{error}</div>)}
          </div>
          <button className="btn"> Submit</button>

        </form>
      </div>
    )
  }
}

export default AuthForm;