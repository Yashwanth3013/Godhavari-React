import React, { useState, useEffect } from "react";
import Login from "../assets/img/avatars/login.png";
import Refresh from "../assets/img/avatars/redo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Applicantlogin() {
  const [user, setUser] = useState({
    capt: "",
  });
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6); // Function called here and save in captcha variable
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  let handleChange1 = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // incap[name] = value;
    setUser(name);
    console.log("clicked");
  };
  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha == user.capt) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        // inputData.style.display = "none";
        // e.preventDefault();
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
        };
        setTimeout(myFunction, 1000);
      }
    };
    setTimeout(myFunctions, 1000);
  };
  const { register, formState, handleSubmit } = useForm();

  // const onSubmit = () => {
  //   console.log("hello");
  // };
  // console.log(formState.errors);
  return (
    <div>
      <div
        className="card shadow-lg m-4 bg-white "
        style={{
          top: "50px",
          left: "380px",
          width: "740px",
          height: "700px",
          position: "absolute",
        }}
      >
        <div>
          <div
            className="rounded d-flex align-items-center"
            style={{
              backgroundColor: "#05265B",
              top: "1080px",
              left: "976px",
              width: "740px",
              height: "60px",
            }}
          >
            <p
              className="ml-5 font-weight-normal"
              style={{ color: "#FFFFFF", fontSize: "14px" }}
            >
              Applicant Login
            </p>
          </div>
        </div>
        <div className="d-flex  mt-4">
          <div>
            <img src={Login} style={{ width: "1600px", height: "480px" }} />
          </div>
          <div className="">
            <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div class="col-md-8">
                <label
                  for="validationCustom01"
                  style={{
                    top: "278px",
                    left: "1000px",
                    width: "73px",
                    height: "21px",
                  }}
                >
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Value"
                  style={{
                    top: "315px",
                    left: "1000px",
                    width: "300px",
                    height: "48px",
                  }}
                  {...register("name", {
                    required: "UserName must is Required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.name && formState.errors.name.message}
                </p>
              </div>
              <div class="col-md-8">
                <label
                  for="validationCustom01"
                  style={{
                    top: "395px",
                    left: "1000px",
                    width: "68px",
                    height: "21px",
                  }}
                >
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Value"
                  id="password"
                  style={{
                    top: "432px",
                    left: "1000px",
                    width: "300px",
                    height: "48px",
                  }}
                  {...register("password", {
                    required: "Password must is Required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.password &&
                    formState.errors.password.message}
                </p>
              </div>

              <div>
                <label for="validationCustom01">
                  <p
                    className="ml-4"
                    style={{
                      top: "512px",
                      left: "1000px",
                      width: "301px",
                      height: "21px",
                    }}
                  >
                    Enter the text you see in the image below
                  </p>
                </label>
              </div>
              <div className="col-md-10 d-flex">
                <label
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  name="capt"
                  required
                  style={{
                    top: "549px",
                    left: "1000px",
                    width: "300px",
                    height: "40px",
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      fontSize: "20px",
                      fontStyle: "italic",
                      letterSpacing: "4px",
                    }}
                  >
                    {captcha}
                  </p>
                </label>
                <div
                  onClick={handleChange1}
                  class="input-group-prepend  "
                  style={{
                    top: "549px",
                    left: "1272px",
                    width: "48px",
                    height: "39px",
                  }}
                >
                  <span
                    class="input-group-text  "
                    id="inputGroupPrepend2"
                    style={{ backgroundColor: "#0A429B" }}
                  >
                    <img
                      src={Refresh}
                      style={{
                        top: "563px",
                        left: "1286px",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-8 mt-3">
                <input
                  onChange={handleChange}
                  type="text"
                  id="inputType"
                  className="form-control"
                  placeholder="Enter Captcha"
                  name="capt"
                  style={{
                    top: "613px",
                    left: "1000px",
                    width: "285px",
                    height: "48px",
                  }}
                  // {...register("capt", {
                  //   required: "captcha is Required",
                  // })}
                />
                {/* <p style={{ color: "red" }}>
                  {formState.errors.capt && formState.errors.capt.message}
                </p> */}
              </div>
              <div class="col-md-10 text-center mt-3">
                <button
                  type="button"
                  id="succesBTN"
                  onClick={onSubmit}
                  class="btn btn-primary ml-1"
                >
                  Verify Captcha
                </button>
              </div>
              <div class="col-md-10 text-center mt-3">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    top: "701px",
                    left: "1088px",
                    width: "130px",
                    height: "44px",
                  }}
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="m-5 p-5">
              <div
                className="d-flex "
                style={{
                  top: "790px",
                  left: "1069px",
                  width: "179px",
                  height: "19px",
                }}
              >
                <div
                  className="font-weight-normal mt-4"
                  style={{ color: "gray" }}
                >
                  Forgot Password?
                </div>
                <Link to="/Forgotpassword">
                  <div className="font-weight-bold mt-4 border-2">
                    Click Here
                  </div>
                </Link>
              </div>
              <div
                className="d-flex mt-4 "
                style={{
                  top: "825px",
                  left: "1017px",
                  width: "181px",
                  height: "19px",
                }}
              >
                <div
                  className="font-weight-normal border"
                  style={{ color: "gray" }}
                >
                  New User?
                </div>
                <Link to="/AccountCreation">
                  <div className="font-weight-bold">Register Account</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicantlogin;
