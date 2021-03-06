import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../../actions/authactions";
import {Link} from "react-router-dom";




class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }
    onChange= (e) => {
      this.setState({[e.target.name]: e.target.value});
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.auth.isAuthenticated){
        this.props.history.push("/checkout");
      }

      if(nextProps.errors){
        this.setState({errors:nextProps.errors});
      }
    }
  
    onSubmit(e) {
      e.preventDefault();

      const userData = {
      
        email: this.state.email,
        password: this.state.password
      
  
      };
      this.props.loginUser(userData);
    };

  
  render() {
    const {errors} = this.state;

    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto"><br/><br/><br/>
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your  account</p>
                <form onSubmit= {this.onSubmit}>
                  <div className="form-group">
                    <input type="email" 
                    className={classnames("form-control form-control-lg",{
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address" 
                    name="email" 
                    value= {this.state.email}
                    onChange= {this.onChange}
                    />
                     {errors.email && (<div className = "invalid-feedback">{errors.email}</div>)}
                  </div>
                  <div className="form-group">
                    <input type="password" 
                    className={classnames("form-control form-control-lg",{
                      "is-invalid": errors.password
                    })} 
                    placeholder="Password" 
                    name="password" 
                    value= {this.state.password}
                    onChange= {this.onChange}
                    />
                     {errors.password && (<div className = "invalid-feedback">{errors.password}</div>)}
                  </div>
                  <input type="submit" 
                  className="btn btn-success btn-block mt-4"   />
                </form><br/><br/>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  };
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.errors
};


const mapStateProps = ( state ) => ({
  auth : state.auth,
  errors: state.errors

});
export default connect(mapStateProps,{ loginUser })(Login);