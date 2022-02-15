import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";

const Vpropertynonagricultural20 = () => {
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
              src={back}
            />
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
                  <p>According to your Input, this is the property we found</p>
                </div>
                <div>
                  <p className="ml-3 font-weight-bold" style={{ color: "#707070", fontSize: "14px" }}>
                  Please check the details, and if correct, select and proceed further. If not, you can go back and search another property
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
                  <p className="ml-3 font-weight-bold ml-5" style={{ color: "#4E4E4E", fontSize: "14px" ,marginTop:'50px'}}>
                  PID NO. : AMMM545456121S6LL
                  </p>
                </div>
                <div>
                <table class="table table-bordered mt-5 ">
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
                    top: "684px",
                    left: "40px",
                    width: "90px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">S.No.</p>
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
                  <p className="text-center font-weight-bold">Property ID</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "330px",
                    width: "300px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Property Description</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "530px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Buyer Name</p>
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
                  <p className="text-center font-weight-bold">Seller Name</p>
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
                  <p className="text-center font-weight-bold">Date of Transaction</p>
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
                  <p className="text-center font-weight-bold">Select this Property</p>
                </th>
                </tr>
            </tbody>
          </thead>
        </table>
        </div>
         </div>
         <div className=" col-md-3" >
         <a class="button"  style={{marginLeft:'520px', width:'300px', height:'40px',color:'white',paddingTop:'10px',borderRadius:"10px"}}>Select Property & Continue</a> 
         </div>
         <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"100px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div> 
        </div>
    </div>
  );
};

export default Vpropertynonagricultural20;
