import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import bbmp from "../assets/img/avatars/bbmp.png";
import swathu from "../assets/img/avatars/swathu.png";
import upor from "../assets/img/avatars/upor.png";
import aasthi from "../assets/img/avatars/aasthi.png";
import bda from "../assets/img/avatars/bda.png";
import others from "../assets/img/avatars/others.png";


const NonAgricultural = () => {
  return (
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
                  className="ml-3 font-weight-bold"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  <p>Awesome, So Do you know where was it registered?</p>
                </div>
                <div>
                  <p
                    className="font-weight-bold ml-3"
                    style={{ fontSize: "25px" }}
                  >
                  Select the Jurisdiction to continue
                  </p>
                </div>
                <div>
                  <p
                    className="ml-3 font-weight-bold"
                    style={{ color: "#707070", fontSize: "14px" }}
                  >
                  Select one to Continue
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div class='row m-5' style={{}}>
            <div className="col-2">
                <img src={bbmp} style={{height:"160px",width:"160px"}}/>
                <p style={{fontSize:"12px",width:"23rem"}}>The <b style={{fontSize:"12px"}}>Bruhat Bengaluru Mahanagara Palike</b> is the administrative body responsible for civic amenities and some infrastructural assets of the<b>Greater Bangalore metropolitan area.</b></p>
            </div>
            <div className="col-2">
                <img src={swathu} style={{height:"160px",width:"160px"}} />
                <p style={{fontSize:"12px",width:"23rem"}}>It is the unique number given by the<b style={{fontSize:"12px"}}>RDPR department</b> for the properties following under the<b>Gram Panchayat jurisdiction.</b></p>
            </div>
            <div className="col-2">
                 <img src={upor} style={{height:"160px",width:"160px"}}/>
                 <p style={{fontSize:'12px',width:"23rem"}}><b style={{fontSize:"12px"}}>Urban Property Ownership Records</b>given by the urban development authorities for the properties falling<b>Municipal Corporation, City Municipal Council (CMC), Town Municipal Council (TMC) and Town Panchayats.</b></p>
            </div>
            <div className="col-2">
                <img src={aasthi} style={{height:"160px",width:"160px"}}/>
                <p style={{fontsize:'12px',width:"23rem"}}>It is an unique number given by the urban development authorities for the properties falling under<b style={{fontSize:"12px"}}>Municipal Corporation, City Municipal Council (CMC), Town Municipal Council (TMC) and Town Panchayats.</b></p>
            </div>
        
            <div className="col-2">
                <img src={bda} style={{height:"160px",width:"160px"}}/>
                <p style={{fontSize:'12px',width:"23rem"}}>The <b style={{fontSize:"12px"}}>Bangalore Development Authority of Bangalore,</b> India, is a governmental organization and the principal planning authority for Bangalore.</p>
            </div>
       
            <div className="col-2">
                 <img src={others} style={{height:"160px",width:"160px"}}/>
                 <p style={{fontSize:'12px',width:"23rem"}}>Select this option if your property does not lie in any of the previous option.</p>
            </div>
       
      </div>
        </div>
        </div>
     
  );
};

export default NonAgricultural;
