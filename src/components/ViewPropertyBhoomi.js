import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
const ViewPropertyBhoomi = () => {
  return (
    <div>
    <div>
        <div class="card shadow-lg bg-white rounded m-5 ">
          <div className="p-5">
            <img
              style={{
                top: "253px",
                left: "55px",
                width: "56px",
                height: "22px",
              }}
              src={back} />
          </div>
          <div>
            <div className="d-flex align-items-center ml-5 mb-5">
              <img
                style={{
                  top: "200px",
                  left: "75px",
                  width: "200px",
                  height: "149px",
                  cursor: "pointer",
                }}
                src={hello}
              />
              <div className="d-flex flex-column">
                <div
                  style={{
                    fontSize: "28px",
                    top: "388px",
                    left: "298px",
                    width: "1100px",
                    height: "48px",
                  }}
                  className="font-weight-bold ml-3"
                  style={{ fontSize: "26px" }}
                >
                  <p>According to your Input, this is the property we found in Bhoomi database</p>
                </div>
                <div>
                  <p
                    className="ml-3 font-weight-bold"
                    style={{ color: "#707070", fontSize: "14px" }}
                  >
                  Please check the details, and if correct, select and proceed further. If not, you can go back and search another property
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div class="card shadow-lg bg-white rounded m-5" style={{top: "10px",left: "5px",width: "1380px",height: "806px"}}>
            <div className="p-5 font-weight-bold ml-3">
                <p>Property 1 of 1</p>
            </div>
         <div class="row , ml-5 , font-weight-bold">
        <div className="col-md-3">
        <p>DISTRICT : BENGALURU (RURAL)</p>
        </div>
         <div className="col-md-3">
        <p>TALUKA: DEVANAHALLI</p>
        </div>
        <div className="col-md-3">
        <p>HOBLI/ TOWN:VIJAYAPURA</p>
        </div>
        <div className="col-md-3">
        <p>INDEX II: VILLAGE: KOMMASANDRA</p>
        </div>
     </div>
   <div>
   <table class="table table-bordered mt-4" style={{ position: "relative", top:"50px" }}>
          <thead
            style={{
              backgroundColor: "#0A429B",
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
                <p class="ml-3 font-weight-normal">Results</p>
              </th>
            </tr>
          </thead>
          <thead>
            <tbody>
              <tr>
                <th
                  style={{
                    top: "784px",
                    left: "40px",
                    width: "90px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">S.NO.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "130px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Survey No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "330px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Hissa No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "530px",
                    width: "360px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Owner Name</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "890px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relationship</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "1090px",
                    width: "310px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relative Name</p>
                </th>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "784px",
                        left: "1400px",
                        width: "480px",
                        height: "40px",
                      }}
                      colspan="3"
                      scope="colgroup"
                    >
                      <p className="text-center">Available Extent</p>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "824px",
                        left: "1400px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1461px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Acre
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1560px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1614px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Gunta
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1720px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1726px",
                          width: "120px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Fraction of Gunta
                      </p>
                    </th>
                  </tr>
                </thead>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "40px",
                    width: "90px",
                    height: "48px",
                  }}
                  scope="row"
                >
                  1
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "130px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>56</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "330px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>1</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "530px",
                    width: "360px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Owner Name</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "890px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Father</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "1280px",
                    left: "1480px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Name</text>
                  </div>
                </td>
                <tr>
                  <colgroup span="3"></colgroup>
                  <td
                    style={{
                      top: "864px",
                      left: "1400px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">2</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1560px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">3</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1720px",
                      width: "140px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">45</p>
                  </td>
                </tr>
              </tr>
            </tbody>
          </thead>
        </table>
   </div>
   <div>
   <table class="table table-bordered mt-4" style={{ position: "relative", top:"50px" }}>
          <thead
            style={{
              backgroundColor: "#0A429B",
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
                <p class="ml-3 font-weight-normal">Court Order Details</p>
              </th>
            </tr>
          </thead>
          <thead>
            <tbody>
              <tr>
                <th
                  style={{
                    top: "784px",
                    left: "40px",
                    width: "90px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">S.NO.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "130px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Survey No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "330px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Hissa No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "530px",
                    width: "360px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Owner Name</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "890px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relationship</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "1090px",
                    width: "310px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relative Name</p>
                </th>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "784px",
                        left: "1400px",
                        width: "480px",
                        height: "40px",
                      }}
                      colspan="3"
                      scope="colgroup"
                    >
                      <p className="text-center">Available Extent</p>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "824px",
                        left: "1400px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1461px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Acre
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1560px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1614px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Gunta
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1720px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1726px",
                          width: "120px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Fraction of Gunta
                      </p>
                    </th>
                  </tr>
                </thead>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "40px",
                    width: "90px",
                    height: "48px",
                  }}
                  scope="row"
                >
                  1
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "130px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>56</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "330px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>1</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "530px",
                    width: "360px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Owner Name</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "890px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Father</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "1280px",
                    left: "1480px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Name</text>
                  </div>
                </td>
                <tr>
                  <colgroup span="3"></colgroup>
                  <td
                    style={{
                      top: "864px",
                      left: "1400px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">2</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1560px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">3</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1720px",
                      width: "140px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">45</p>
                  </td>
                </tr>
              </tr>
            </tbody>
          </thead>
        </table>
        <div>
        <div class="card-body">
                <div class="row ml-4" style={{position: "relative", top:"100px"}}>
                    <div class="col-md-3 "  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>DISTRICT</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>TALUKA</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>HOBLI</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>HISSA NO.</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px",padding:"5px"}} className="mt-4" placeholder='Value' disabled/> 
                    </div>
                    </div>
                    </div>
        </div>
   </div>
     </div>
     <div className="border bg-muted m-5" style={{ width:'1290px', height:'40px',borderRadius:"10px"}}>
     <button className="btn  btn-block" style={{ fontSize: "20px" }}>
       <span className="fa fa-plus-circle" />Add a new Property 
    </button>
     </div>
     <div className=" col-md-3" >
        <a class="button "  style={{marginLeft:'520px', width:'300px', height:'40px',
                        color:'white',paddingTop:'10px',borderRadius:"10px"}}>Select Property & Continue</a> 
        </div>
        <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"100px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div> 
          </div>
  );
};
export default ViewPropertyBhoomi;