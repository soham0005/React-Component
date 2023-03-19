import React from "react";
import './Login.css'

const Login = () => {
  return (
    <>
      <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>

        <div className="box">
          <div className="container">
            <div className="form">
              <h2>
                Login Form <hr />
              </h2>

              <form>
                <div className="inputBox">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Password" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Confirm Password" />
                </div>
                <div className="button">
                  <button> Login </button>
                </div>
                <div className="link">
                  <p className="forget">Reset Password</p>
                  <p className="forget">Create Account</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
