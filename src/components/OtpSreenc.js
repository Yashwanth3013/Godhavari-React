import React from "react";
import "./Otpscreenc.css";

const Otpsreenc = () => {
  const onFpwd = () => {
    window.location.href = "/Forgotpassword";
  };
  const onReg = () => {
    window.location.href = "/Accountcreation";
  };
  return (
    <>
      <center id="mtme">
        <div
          style={{
            top: "1000px",
            left: "560px",
            width: "800px",
            height: "500px",
          }}
          className="justify-content-center align-items-center"
        >
          <div class="card" style={{ borderRadius: "5px" }}>
            <div
              class="card-header"
              style={{
                backgroundColor: "#05265b",
                color: "white",
                fontWeight: "500",
                borderRadius: "5px",
                textAlign: "left",
                height: "50px",
              }}
            >
              <span>Applicant Login</span>
            </div>
            <div class="card-body ">
              <div class="row ml-auto justify-content-center align-items-center">
                <div class="col-md-6 ">
                  <div
                    style={{
                      top: "700px",
                      left: "599px",
                      width: "352px",
                      height: "232px",
                      textAlign: "left",
                      opacity: "0.6",
                    }}
                    id="mth1"
                  >
                    <h1>
                      <b>
                        {" "}
                        We just send <br />
                        you an
                        <span style={{ color: "#DC9A00" }}>OTP</span>
                        <br /> on your Mobile <br />
                        <span style={{ color: "#DC9A00" }}>Number</span>
                      </b>
                    </h1>
                  </div>
                  <p style={{ textAlign: "left", color: "black" }}>
                    Enter the Received OTP to <br /> Continue the Login process
                  </p>
                  <div id="hr" />
                </div>

                <div class="col-md-6 ">
                  <form>
                    <div class="form-group" style={{ textAlign: "left" }}>
                      <label for="otp">Enter the OTP</label>
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        class="form-control"
                        placeholder="Value"
                        style={{
                          top: "414px",
                          left: "1007px",
                          width: "320px",
                          height: "40px",
                        }}
                        required
                      />
                    </div>
                    <div class="form-group" style={{ textAlign: "left" }}>
                      <label for="info">
                        Resend OTP in 10 Seconds. &nbsp;
                        <a
                          href="#"
                          style={{ color: "black" }}
                          className="uline"
                        >
                          Resend
                        </a>
                      </label>
                      <div
                        class="input-group"
                        style={{
                          top: "488px",
                          left: "40px",
                          width: "1840px",
                          height: "30px",
                        }}
                      ></div>
                      <br />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary px-5"
                      style={{
                        backgroundColor: "#0a429b",
                        top: "593px",
                        left: "1088px",
                        width: "144px",
                        height: "48px",
                      }}
                    >
                      Login
                    </button>
                  </form>
                  <div style={{ fontSize: "smaller" }}>
                    <div class="row" style={{ textAlign: "left" }}>
                      <div class="col-3"></div>
                      <div class="col-9">
                        <label for="info">
                          Forgot Password ?&nbsp;
                          <a
                            href="#"
                            style={{ color: "black" }}
                            className="uline"
                            onClick={onFpwd}
                          >
                            Click Here
                          </a>
                        </label>
                      </div>
                    </div>
                    <div class="row" style={{ textAlign: "left" }}>
                      <div class="col-3"></div>
                      <div class="col-9">
                        <label for="info">
                          New User ?&nbsp;{" "}
                          <a
                            style={{ color: "black" }}
                            className="uline"
                            onClick={onReg}
                          >
                            Register Account
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Otpsreenc;
