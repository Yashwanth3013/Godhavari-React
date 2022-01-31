import React from "react";
import Rectangle from "../assets/img/avatars/Rectangle673.png";
import Rectangle1 from "../assets/img/avatars/Group175@3x.png";
import Rectangle2 from "../assets/img/avatars/Group176@3x.png";
function ApplicantDashboard() {
  return (
    <div>
      <div className="card shadow-lg  p-3 m-4  bg-white rounded">
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <img
              style={{
                top: "254px",
                left: "88px",
                width: "333px",
                height: "263px",
              }}
              src={Rectangle}
            />
          </div>
          <div>
            <div
              style={{
                top: "284px",
                left: "469px",
                width: "796px",
                height: "117px",
              }}
            >
              <p
                class="text-wrap font-weight-bold text-left"
                style={{ fontSize: "34px", width: "70rem" }}
              >
                Hello User! <br></br> Welcome to Godhavari Online Services
              </p>
            </div>
            <div
              style={{
                top: "438px",
                left: "469px",
                width: "500px",
                height: "24px",
              }}
            >
              <text
                className="font-weight-normal"
                style={{ color: "#707070", fontSize: "18px" }}
              >
                To start a new application process, Click on the Start button
              </text>
            </div>
          </div>
          <div>
            <div class="col-md-12 text-right">
              <button
                style={{
                  top: "365px",
                  left: "1586px",
                  width: "209px",
                  height: "36px",
                  backgroundColor: "#0A429B",
                  fontSize:"16px"
                }}
                type="button"
                class="btn btn-primary"
              >
                Start a New Application
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg  m-4  bg-white rounded">
        <table class="table ">
          <thead
            style={{
              backgroundColor: "#888888",
              top: "553px",
              left: "40px",
              width: "1840px",
              height: "60px",
            }}
          >
            <tr className="text-white " style={{ fontSize: "14px" }}>
              <th
                style={{
                  top: "1136px",
                  left: "83px",
                  width: "1762px",
                  height: "48px",
                }}
                scope="col"
              >
                <div className="d-flex justify-content-between">
                  <text className="ml-5" style={{ fontSize: "18px" }}>
                    My Applications
                  </text>
                  <div>
                    <div class="col-md-12  mr-5">
                      <button
                        style={{
                          top: "575px",
                          left: "1701px",
                          width: "84px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                        type="button"
                        class="btn btn-primary"
                      >
                        See All
                      </button>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <table class="table border table-striped">
            <thead>
              <tr className="border-b-0"
                style={{
                  top: "633px",
                  left: "40px",
                  width: "1840px",
                  height: "50px",
                  backgroundColor: "#B2B2B2",
                }}
              >
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "71px",
                    width: "50px",
                    height: "27px",
                  }}
                  scope="row"
                >
                  <p className="text-white font-weight-bold">S.No.</p>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "241px",
                    width: "192px",
                    height: "27px",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-white font-weight-bold">
                      Application Number
                    </p>
                    <i
                      style={{ fontSize: "20px", color: "white" }}
                      class="fa fa-sort ml-3 "
                      aria-hidden="true"
                    ></i>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "613px",
                    width: "44px",
                    height: "27px",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-white font-weight-bold">Date</p>
                    <i
                      style={{ fontSize: "20px", color: "white" }}
                      class="fa fa-sort ml-3 "
                      aria-hidden="true"
                    ></i>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "837px",
                    width: "158px",
                    height: "27px",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-white font-weight-bold">
                      Application Type
                    </p>
                    <i
                      style={{ fontSize: "20px", color: "white" }}
                      class="fa fa-sort ml-3 "
                      aria-hidden="true"
                    ></i>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "1175px",
                    width: "172px",
                    height: "27px",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-white font-weight-bold">
                      Application Status
                    </p>
                    <i
                      style={{ fontSize: "20px", color: "white" }}
                      class="fa fa-sort ml-3 "
                      aria-hidden="true"
                    ></i>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "660px",
                    left: "1627px",
                    width: "62px",
                    height: "27px",
                  }}
                >
                  <div>
                    <p className="text-white text-center font-weight-bold">
                      Action
                    </p>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "91px",
                    width: "10px",
                    height: "27px",
                    color: "#707070",
                  }}
                  scope="row"
                >
                  1
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "255px",
                    width: "164px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>A1554S545455112</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "584px",
                    width: "102px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>08-08-2021</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "823px",
                    width: "186px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Property Registration</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "1160px",
                    width: "202px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Pending at SRO</text>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        View
                      </button>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                        disabled>
                        Edit
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "91px",
                    width: "10px",
                    height: "27px",
                    color: "#707070",
                  }}
                  scope="row"
                >
                  2
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "255px",
                    width: "164px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>POA5ASDD555112</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "584px",
                    width: "102px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>06-08-2021</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "823px",
                    width: "186px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Power of Attoney</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "1160px",
                    width: "202px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>In Progress</text>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "91px",
                    width: "10px",
                    height: "27px",
                    color: "#707070",
                  }}
                  scope="row"
                >
                  3
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "255px",
                    width: "164px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>M1554S545445112</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "584px",
                    width: "102px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>08-05-2020</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "823px",
                    width: "186px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Marriage Registration</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "1160px",
                    width: "202px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Payment Pending</text>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        Make Payment
                      </button>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        Add Challan
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "91px",
                    width: "10px",
                    height: "27px",
                    color: "#707070",
                  }}
                  scope="row"
                >
                  4
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "255px",
                    width: "164px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>A1554S545455112</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "584px",
                    width: "102px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>08-08-2021</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "823px",
                    width: "186px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Property Registration</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "740px",
                    left: "1160px",
                    width: "202px",
                    height: "27px",
                    color: "#707070",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Appointment Pending</text>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                        Schedule
                      </button>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{
                          top: "735px",
                          left: "151p0x",
                          width: "120px",
                          height: "36px",
                          backgroundColor: "#0A429B",
                          fontSize:"13px"
                        }}
                      >
                       View
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
      <div className="d-flex">
        <div>
          <div className="card shadow-lg m-4 bg-white">
            <div>
              <div
                className="rounded d-flex  align-items-center"
                style={{
                  backgroundColor: "gray",
                  top: "1080px",
                  left: "976px",
                  width: "710px",
                  height: "60px",
                }}
              >
                <p
                  className="ml-5 font-weight-bold"
                  style={{ color: "#FFFFFF", fontSize: "18px" }}
                >
                  Latest News
                </p>
              </div>
              <div
                className=" p-5 "
                style={{
                  top: "1200px",
                  left: "80px",
                  width: "600px",
                  height: "204px",
                  fontSize: "18px",
                }}
              >
                <p className="mt-3">
                  • eSigning Facility for Online EC and Online CC
                </p>
                <p className="mt-5">
                  • RegisterasBank User (For filing mortgaged/released
                  properties)
                </p>
                <p className="mt-5">
                  • PreRegistration Data Entry and Appointment Booking (PRDE)
                </p>
                <p className="mt-5  ">• UserManual.</p>
              </div>
            </div>
            <div className="text-right pr-5">
              <img
                style={{
                  top: "1368px",
                  left: "657px",
                  width: "230px",
                  height: "261px",
                }}
                src={Rectangle1}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="card shadow-lg  m-4 bg-white">
            <div className="">
              <div
                className="rounded d-flex   align-items-center"
                style={{
                  backgroundColor: "gray",
                  top: "1080px",
                  left: "976px",
                  width: "740px",
                  height: "60px",
                }}
              >
                <p
                  className="ml-5 font-weight-bold"
                  style={{ color: "#FFFFFF", fontSize: "18px" }}
                >
                  Services
                </p>
              </div>
              <div className="d-flex ml-5">
                <div>
                  <div
                    className="card shadow-lg m-4 mt-5 bg-white d-flex justify-content-center  align-items-center"
                    style={{
                      width: "320px",
                      height: "60px",
                    }}
                  >
                    <p className="font-weight-bold">BOOK APPOINTMENT</p>
                  </div>
                  <div
                    className="card shadow-lg m-4 mt-5  bg-white d-flex justify-content-center  align-items-center"
                    style={{
                      width: "320px",
                      height: "60px",
                    }}
                  >
                    <p className="font-weight-bold">FEE CALCULATION</p>
                  </div>
                  <div
                    className="card shadow-lg m-4 mt-5 bg-white d-flex justify-content-center  align-items-center"
                    style={{
                      width: "320px",
                      height: "60px",
                    }}
                  >
                    <p className="font-weight-bold">MARKET VALUATION</p>
                  </div>
                  <div
                    className="card shadow-lg m-4 mt-5 bg-white d-flex justify-content-center  align-items-center"
                    style={{
                      width: "320px",
                      height: "60px",
                    }}
                  >
                    <p className="font-weight-bold">CERTIFIED COPY</p>
                  </div>
                  <div
                    className="card shadow-lg m-4 mt-5 bg-white d-flex justify-content-center  align-items-center"
                    style={{
                      width: "320px",
                      height: "60px",
                    }}
                  >
                    <p className="font-weight-bold">ENCUMBRANCE CERTIFICATE</p>
                  </div>
                </div>
                <div className="d-flex ml-5 align-items-center">
                  <img
                    style={{
                      top: "1247px",
                      left: "1481px",
                      width: "240px",
                      height: "240px",
                    }}
                    src={Rectangle2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDashboard;
