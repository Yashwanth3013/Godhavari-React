import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "../assets/img/avatars/login.png";
import Refresh from "../assets/img/avatars/redo.png";
import { Link } from "react-router-dom";
function Account() {
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
  return (
    <div>
      <div
        className="card shadow-lg m-4 bg-white "
        style={{
          left: "210px",
          width: "1100px",
          height: "730px",
        }}
      >
        <div>
          <div
            className="rounded d-flex align-items-center justify-content-between"
            style={{
              backgroundColor: "#05265B",
              top: "168px",
              left: "350px",
              width: "1100px",
              height: "60px",
            }}
          >
            <p
              className="ml-5 font-weight-normal"
              style={{ color: "#FFFFFF", fontSize: "14px" }}
            >
              Create Account
            </p>
            <p
              className="mr-5 font-weight-normal"
              style={{ color: "#FFFFFF", fontSize: "18px" }}
            >
              X
            </p>
          </div>
          <form class="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div class="d-flex justify-content-between m-3">
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "256px",
                    left: "440px",
                    width: "86px",
                    height: "21px",
                  }}
                >
                  First name*
                </label>
                <input
                  style={{
                    top: "293px",
                    left: "440px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  id="firstname"
                  {...register("firstname", {
                    required: "Firstname must is Required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.firstname &&
                    formState.errors.firstname.message}
                </p>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "256px",
                    left: "800px",
                    width: "99px",
                    height: "21px",
                  }}
                >
                  Middle Name
                </label>
                <input
                  style={{
                    top: "293px",
                    left: "800px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  {...register("middlename", {
                    required: "Middlename Must Be Required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.middlename &&
                    formState.errors.middlename.message}
                </p>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "256px",
                    left: "1160px",
                    width: "77px",
                    height: "21px",
                  }}
                >
                  Last name
                </label>
                <input
                  style={{
                    top: "293px",
                    left: "1160px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  id="lastname"
                  {...register("lastname", {
                    required: "Lastname Must be required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.lastname &&
                    formState.errors.lastname.message}
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between m-3">
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "373px",
                    left: "440px",
                    width: "60px",
                    height: "21px",
                  }}
                >
                  Gender*
                </label>
                <select
                  style={{
                    top: "410px",
                    left: "440px",
                    width: "320px",
                    height: "48px",
                  }}
                  id="title"
                  {...register("title", { required: true })}
                >
                  <option> Select </option>
                  <option> Male </option>
                  <option> Female </option>
                  <option> Others </option>
                </select>
                <p style={{ color: "red" }}>
                  {formState.errors.title && formState.errors.title.message}
                </p>
              </div>

              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "373px",
                    left: "800px",
                    width: "67px",
                    height: "21px",
                  }}
                >
                  Email ID*
                </label>
                <input
                  style={{
                    top: "410px",
                    left: "800px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  id="email"
                  {...register("email", {
                    required: "Email must be Required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "This is not a valid email",
                    },
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.email && formState.errors.email.message}
                </p>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "373px",
                    left: "1160px",
                    width: "122px",
                    height: "21px",
                  }}
                >
                  MobileNumber*
                </label>
                <input
                  style={{
                    top: "410px",
                    left: "1160px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  id="mobile"
                  {...register("mobile", {
                    required: "MobileNumber is required",
                    maxLength: 10,
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.mobile && formState.errors.mobile.message}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div class="col-md-4 ">
                <label
                  style={{
                    top: "522px",
                    left: "440px",
                    width: "135px",
                    height: "21px",
                  }}
                >
                  Security Question*{" "}
                </label>
                <select
                  style={{
                    top: "559px",
                    left: "440px",
                    width: "680px",
                    height: "48px",
                  }}
                >
                  <option>Select</option>
                  <option>What is your pet Name?</option>
                  <option>What is your Favourite past?</option>
                  <option>What is your first MobileNumber?</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  style={{
                    top: "522px",
                    left: "1160px",
                    width: "60px",
                    height: "21px",
                  }}
                >
                  Answer*
                </label>
                <input
                  style={{
                    top: "559px",
                    left: "1160px",
                    width: "320px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Select"
                  id="answer"
                  {...register("answer", {
                    required: "Answer is required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.answer && formState.errors.answer.message}
                </p>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center text-center">
              <div>
                <p className="font-weight-bold ">
                  Enter the text you see in the image below
                </p>
              </div>
              <div className="d-flex">
                <div className="col-md-12 d-flex justify-content-center">
                  <label
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    name="capt"
                    required
                    style={{
                      top: "549px",
                      left: "1000px",
                      width: "260px",
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
                    class="input-group-prepend"
                    style={{
                      top: "549px",
                      left: "1272px",
                      width: "48px",
                      height: "39px",
                    }}
                  >
                    <span
                      class="input-group-text"
                      id="inputGroupPrepend2"
                      style={{ backgroundColor: "#0A429B" }}
                    >
                      <img
                        src={Refresh}
                        style={{
                          top: "563px",
                          left: "1286px",
                          width: "21px",
                          height: "20px",
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <input
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  id="inputType"
                  placeholder="Value"
                  name="capt"
                  style={{
                    top: "613px",
                    left: "1000px",
                    width: "300px",
                    height: "48px",
                  }}
                />
              </div>
            </div>
            <div class="col-md-12 text-center mt-3">
              <button
                type="button"
                id="succesBTN"
                onClick={onSubmit}
                class="btn btn-primary"
              >
                Verify Captcha
              </button>
            </div>
            <div className="text-center mb-3">
              <button
                style={{
                  top: "884px",
                  left: "888px",
                  width: "144px",
                  height: "48px",
                }}
                class="btn btn-primary mt-3"
                type="submit"
              >
                Register
              </button>
            </div>

            <div className="d-flex justify-content-center font-weight-bold mt-3">
              <p>Already a User?</p>
              <Link to="/">
                <p>Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
