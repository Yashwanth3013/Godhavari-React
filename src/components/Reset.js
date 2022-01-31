import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import Resett from "../assets/img/avatars/resetpass.png";
import Hr from "../assets/img/avatars/resetpass1.png";

function Reset() {
  const { register, formState, handleSubmit } = useForm();
  const onSubmit = () => {
    // console.log("hello");
  };
  // console.log(formState.errors);
  return (
    <div>
      <div
        className="card shadow-lg m-4 bg-white "
        style={{
          left: "380px",
          width: "740px",
          height: "590px",
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
              Reset Password
            </p>
          </div>
        </div>
        <div className="d-flex m-5">
          <div className="d-flex align-items-center gap-3 ">
            <img src={Resett} style={{ width: "1600px", height: "250px" }} />
            <img className="mt-5" style={{ height: "400px" }} src={Hr} />
          </div>
          <div>
            <div className="mt-5">
              <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-8">
                  <label
                    for="validationCustom01"
                    style={{
                      top: "296x",
                      left: "966px",
                      width: "105px",
                      height: "21px",
                    }}
                  >
                    Old Password*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Value"
                    id="oldpassword"
                    style={{
                      top: "333px",
                      left: "966px",
                      width: "320px",
                      height: "48px",
                    }}
                    {...register("oldpassword", {
                      required: "Oldpassword must is Required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {formState.errors.oldpassword &&
                      formState.errors.oldpassword.message}
                  </p>
                </div>
                <div class="col-md-8">
                  <label
                    for="validationCustom01"
                    style={{
                      top: "413px",
                      left: "966px",
                      width: "112px",
                      height: "21px",
                    }}
                  >
                    New Password*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="newpassword"
                    placeholder="Value"
                    style={{
                      top: "450px",
                      left: "966px",
                      width: "320px",
                      height: "48px",
                    }}
                    {...register("newpassword", {
                      required: "Newpassword  be is Required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {formState.errors.newpassword &&
                      formState.errors.newpassword.message}
                  </p>
                </div>
                <div class="col-md-8">
                  <label
                    for="validationCustom01"
                    style={{
                      top: "530px",
                      left: "966px",
                      width: "172px",
                      height: "21px",
                    }}
                  >
                    Re-enter New Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="reenter"
                    placeholder="Value"
                    style={{
                      top: "567px",
                      left: "966px",
                      width: "320px",
                      height: "48px",
                    }}
                    {...register("reenter", {
                      required: "Reenter password is Required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {formState.errors.reenter &&
                      formState.errors.reenter.message}
                  </p>
                </div>
                <div class="d-flex  justify-content-between col-md-12 mt-5">
                  <button
                    type="reset"
                    class="btn btn-default"
                    style={{
                      width: "144px",
                      height: "44px",
                      top: "719px",
                      left: "966px",
                    }}
                  >
                    <p
                      className=""
                      style={{ fontSize: "16px", color: "#0A429B" }}
                    >
                      Reset
                    </p>
                  </button>

                  <button
                    type="submit"
                    class="btn btn-primary ml-5"
                    style={{
                      width: "144px",
                      height: "44px",
                      top: "719px",
                      left: "1142px",
                    }}
                  >
                    <p className="text-center " style={{ fontSize: "16px" }}>
                      Change
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
