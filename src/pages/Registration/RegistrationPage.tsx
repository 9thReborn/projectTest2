import React, { useState } from "react";
import "./RegistrationPage.css";
import InputComponent from "./InputComponent";
import axios from "axios";
import redCross from "../../assets/Vector.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const [text, setText] = useState({
    email: "",
    fullName: "",
    phone: "",
    role: "",
    password: "",
  });

  const url = "http://localhost:5000/auth/register";
  const googleSignUpUrl = "http://localhost:5000/auth/google";

  const handleGoogleSignUp = async () => {
    window.location.href = googleSignUpUrl;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      localStorage.setItem("email", JSON.stringify(text.email));
      const resp = await axios.post(url, text);
      console.log(resp);
      if (resp.data.message === "User registered successfully") {
		localStorage.setItem('userInfo', JSON.stringify(resp.data.user))
        toast.success(resp.data.message);
        setText({
          email: "",
          fullName: "",
          phone: "",
          role: "",
          password: "",
        });
        setTimeout(() => {
          window.location.href = "/verify";
        }, 1000);
      } else {
        toast.error(resp.data.message);
        localStorage.removeItem("email");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error);
	  localStorage.removeItem("email");
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  };

  return (
    <div className="signup-reg">
      <div className="signup-right">
        <img src={redCross} alt="red cross" />
        <h2 className="register-h2">Let's get you registered</h2>
        <p>Get an account today and start enjoying our benefits</p>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <button id="google" onClick={handleGoogleSignUp}>
            Sign Up With Google
          </button>
          <div className="main-line">
            <div className="line"></div> <span className="p-line">Or</span>{" "}
            <div className="line2"></div>
          </div>

          <div className="inputDiv">
            <label>Email address</label>
            <InputComponent
              type="email"
              className="input-field"
              value={text.email}
              placeholder="Name@companyemail.com"
              name="email"
              required={true}
              disabled={false}
              onChange={handleInputChange}
            />
          </div>

          <div className="inputDiv">
            <label>Full Name</label>
            <InputComponent
              type="text"
              className="input-field"
              value={text.fullName}
              placeholder="John Doe"
              name="fullName"
              required={true}
              disabled={false}
              onChange={handleInputChange}
              
            />
          </div>

          <div className="inputDiv">
            <label>Phone Number</label><br />
            <InputComponent
              type="text"
              className="input-field"
              value={text.phone}
              placeholder="+234 800 0000 000"
              name="phone"
              required={true}
              disabled={false}
              onChange={handleInputChange}
            />
          </div>

          <div className="inputDiv">
            <label>Role</label>
            <select value={text.role} disabled={false} onChange={handleInputChange}>
              <option value="Doctor">Doctor</option>
              <option value="User">User</option>
            </select>
          </div>

          <div className="inputDiv">
            <label>Password</label>
            <InputComponent
              type="password"
              className="input-field"
              value={text.password}
              placeholder="Password123@"
              name="password"
              required={true}
              disabled={false}
              onChange={handleInputChange}
            />
          </div>

          <div className="inputDiv">
            <button type="submit" className="submit">
              Sign Up
            </button>
          </div>
          <p>
            Already a member?{" "}
            <a href="/login" className="red">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
