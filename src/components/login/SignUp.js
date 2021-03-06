import React from "react";
import "./Login.css";

const SignUp = () => {
  return (
    <div classNameName="section">
      <div classNameName="container">
        <div className="card bg-light">
          <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p className="row">
              <div className="col-lg-6">
                <a href="" className=" btn btn-block btn-twitter">
                  <i className="fab fa-twitter"></i>   Login via Twitter
                </a>
              </div>
              <div className="col-lg-6">
                <a href="" className=" btn btn-block btn-facebook">
                  <i className="fab fa-facebook-f"></i>   Login via facebook
                </a>
              </div>
            </p>
            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone"></i>
                  </span>
                </div>
                <select className="custom-select">
                  <option selected="">+91</option>
                  <option value="1">+92</option>
                  <option value="2">+18</option>
                  <option value="3">+71</option>
                </select>
                <input
                  name=""
                  className="form-control"
                  placeholder="Phone number"
                  type="number"
                />
              </div>

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Create password"
                  type="password"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Create Account
                </button>
              </div>
              <p className="text-center">
                Have an account? <a href="/login">Log In</a>
              </p>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
