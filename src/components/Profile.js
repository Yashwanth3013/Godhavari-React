import React from "react";
import { useForm } from "react-hook-form";

function Profile() {
  const { register, formState, handleSubmit } = useForm();

  const onSubmit = () => {};
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
              Edit profile
            </p>
          </div>
          <div className="d-flex">
            {/* <div
              className="rounded-circle"
              style={{
                backgroundColor: "gray",
                width: "100px",
                height: "100px",
              }}
            ></div> */}
            <form
              class="needs-validation  m-5 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="d-flex justify-content-between">
                <div class="col-md-4 mb-3">
                  <label
                    style={{
                      top: "290px",
                      left: "598px",
                      width: "86px",
                      height: "21px",
                    }}
                  >
                    First name*
                  </label>
                  <input
                    style={{
                      top: "327px",
                      left: "598px",
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
                      top: "290px",
                      left: "958px",
                      width: "99px",
                      height: "21px",
                    }}
                  >
                    Middle Name
                  </label>
                  <input
                    style={{
                      top: "327px",
                      left: "958px",
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
                      top: "290px",
                      left: "1318px",
                      width: "77px",
                      height: "21px",
                    }}
                  >
                    Last name
                  </label>
                  <input
                    style={{
                      top: "327px",
                      left: "1318px",
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
              <div class="d-flex justify-content-between">
                <div class="col-md-4 mb-3">
                  <label
                    style={{
                      top: "487px",
                      left: "598px",
                      width: "60px",
                      height: "21px",
                    }}
                  >
                    Gender*
                  </label>
                  <select
                    style={{
                      top: "444px",
                      left: "598px",
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
                      top: "497px",
                      left: "958px",
                      width: "67px",
                      height: "21px",
                    }}
                  >
                    Email ID*
                  </label>
                  <input
                    style={{
                      top: "444px",
                      left: "958px",
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
                      top: "497px",
                      left: "1318px",
                      width: "122px",
                      height: "21px",
                    }}
                  >
                    MobileNumber*
                  </label>
                  <input
                    style={{
                      top: "444px",
                      left: "1318px",
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
              <div class="ml-4">
                <label
                  style={{
                    top: "524px",
                    left: "598px",
                    width: "141px",
                    height: "21px",
                  }}
                >
                  Permanent Address
                </label>
                <input
                  style={{
                    top: "561px",
                    left: "598px",
                    width: "1040px",
                    height: "48px",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Value"
                  id="address"
                  {...register("address", {
                    required: "address is required",
                  })}
                />
                <p style={{ color: "red" }}>
                  {formState.errors.address && formState.errors.address.message}
                </p>
              </div>
              <div className="d-flex">
                <div>
                  <div class="col-md-4 mb-3">
                    <label
                      style={{
                        top: "641px",
                        left: "598px",
                        width: "75px",
                        height: "21px",
                      }}
                    >
                      PIN Code*
                    </label>
                    <input
                      style={{
                        top: "678px",
                        left: "598px",
                        width: "320px",
                        height: "48px",
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Value"
                      id="pincode"
                      {...register("pincode", {
                        required: "Pincode is required",
                        maxLength: 6,
                      })}
                    />
                    <p style={{ color: "red", width: "40rem" }}>
                      {formState.errors.pincode &&
                        formState.errors.pincode.message}
                    </p>
                  </div>
                </div>
                <div>
                  <div class="col-md-4 mb-3">
                    <label
                      style={{
                        top: "641px",
                        left: "958px",
                        width: "38px",
                        height: "21px",
                      }}
                    >
                      PAN*
                    </label>
                    <input
                      style={{
                        top: "678px",
                        left: "958px",
                        width: "320px",
                        height: "48px",
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Value"
                      id="pan"
                      {...register("pan", {
                        required: "Pan is required",
                        maxLength: 6,
                      })}
                    />
                    <p style={{ color: "red" }}>
                      {formState.errors.pan && formState.errors.pan.message}
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-5">
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
                    Cancel
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
                    backgroundColor: "#0A429B",
                  }}
                >
                  <p className="text-center " style={{ fontSize: "16px" }}>
                    Save Changes
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
