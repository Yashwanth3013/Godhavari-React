import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import back1 from "../assets/img/avatars/back1.png";
import fw from "../assets/img/avatars/fw.png";
const MarketValuation = () => {
    const prosche = () => {
        window.location.href = "/propertyschedule";
      };
      const valuate = () => {
        window.location.href = "/marketvaluation";
      };
  return (
    <>
         <div>
            <div class=" tab" style={{width:'100%'}}>
              <button class=""  onclick="openCity(event, 'London')" style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "222px",height: "80px"}}>Home</button>
              <button class="" onclick="openCity(event, 'Paris')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>About Department</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Resources</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>External Links</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Right to Information</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Help</button>
            </div>
        </div>
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
                    width: "1000px",
                    height: "48px",
                  }}
                  className="font-weight-bold ml-3"
                  style={{ fontSize: "26px" }}
                >
                  <h2><strong>Next, We need to find the Value of your property</strong></h2>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="card shadow-lg bg-white rounded-3  " style={{
                width: "1290px",
                height: "320px",
                marginLeft:"30px",
                marginRight:"30px",
                marginTop:"30px"
              }}>
                  <div >
                <p style={{marginTop:"30px",marginLeft:"30px"}}> <a href='#'><img src={back1} />
                </a><strong className='m-4 '>PROPERTY 1 OF 3</strong> 
                <a href='#'><img src={fw} /></a> </p>
            </div>
            <div className='row' style={{marginTop:"60px",marginLeft:"30px"}}>
                    <div className='col-md-3'>
                        <h4><small>DISTRICT : BENGALURU (RURAL)</small></h4>
                    </div>
                    <div className='col-md-3'>
                        <h4><small>TALUKA: DEVANAHALLI</small></h4>
                    </div>
                    <div className='col-md-3'>
                        <h4><small>HOBLI/ TOWN:VIJAYAPURA</small></h4>
                    </div>
                    <div className='col-md-3'>
                        <h4><small>INDEX II: VILLAGE: KOMMASANDRA</small></h4>
                    </div>
                </div>
          <div className='row' style={{marginTop:"30px",marginLeft:"30px"}}> 
                    <div className='col-md-3'>
                         <lable >
                         <b>Property Usage</b>
                         </lable>
                         <br />
                         <h4 style={{marginTop:"30px"}}><strong>AGRICULTURAL</strong></h4>
                    </div>
                    <div className='col-md-3'>
                         <lable>
                         <b>Total Area</b>
                         </lable>
                         <br />
                         <h4 style={{marginTop:"30px"}}><strong>2.59 Acres</strong></h4>
                    </div>   
            </div></div>
            <div class="card shadow-lg bg-white rounded-3  " style={{
                width: "1290px",
                height: "320px",
                marginLeft:"30px",
                marginRight:"30px",
                marginTop:"30px"
              }}>
                <div>
                    <h3 style={{marginTop:"40px",marginLeft:"30px"}}><small>AGRICULTURE RATE DETAILS</small></h3>
                </div>
                <div style={{marginTop:"40px",marginLeft:"30px",marginRight:"30px"}}>
                <table class="table table-bordered table-sm">
                        <thead>
                        <tr class=" bg-primary">
                            <th className='text-center'>S.No.</th>
                            <th className='text-center'>Property Type</th>
                            <th className='text-center'>Rate (₹/ Acres)</th>
                            <th className='text-center'>Select</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='text-center'>01</td>
                            <td >Dry, No Source of Irrigation, Other</td>
                            <td className='text-right'>4,00,000.00</td>
                            <td className='text-center'><input type="radio" /></td>
                        </tr>
                        <tr>
                            <td className='text-center'>02</td>
                            <td>Wet (Assured Water supply from Government Tanks/Canals, One Crop</td>
                            <td className='text-right'>5,00,000.00</td>
                            <td className='text-center'><input type="radio" /></td>
                        </tr>
                        <tr>
                            <td className='text-center'>03</td>
                            <td>Bagayat, Wet</td>
                            <td className='text-right'>6,00,000.00</td>
                            <td className='text-center'><input type="radio" /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card shadow-lg bg-white rounded-3  " style={{
                width: "1290px",
                height: "880px",
                marginLeft:"30px",
                marginRight:"30px",
                marginTop:"30px"
              }}>
                <div>
                    <h3 style={{marginTop:"40px",marginLeft:"30px"}}><small>AGRICULTURE RATE DETAILS</small></h3>
                </div>
                <div style={{marginTop:"40px",marginLeft:"30px",marginRight:"30px"}}>
                <table class="table table-bordered table-sm">
                        <thead>
                        <tr class=" bg-primary">
                            <th className='text-center'>S.No.</th>
                            <th className='text-center'>Yes</th>
                            <th className='text-center'>No</th>
                            <th className='text-center'>Annexure Rule</th>
                            <th className='text-center'>Percentage</th>
                            <th className='text-center'>Amount (₹)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='text-center'>01</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td >Corner Property</td>
                            <td className='text-right'>10.00</td>
                            <td className='text-right'>4,00,000.00</td>
                        </tr>
                        <tr>
                            <td className='text-center'>02</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Any Two side Roads</td>
                            <td className='text-right'>10.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>03</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Industrial Purpose</td>
                            <td className='text-right'>50.00</td>
                            <td className='text-right'>6,00,000.00</td>
                        </tr>
                        <tr>
                            <td className='text-center'>04</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Property Abutting to NH</td>
                            <td className='text-right'>50.00</td>
                            <td className='text-right'>4,00,000.00</td>
                        </tr>
                        <tr>
                            <td className='text-center'>05</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Property Abutting to SH</td>
                            <td className='text-right'>25.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>06</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Residential Purpose (Undeveloped) 5 to 10 Guntas</td>
                            <td className='text-right'>-50.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>07</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Commercial Purpose (Undeveloped) 5 to 10 Guntas</td>
                            <td className='text-right'>-50.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>08</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Commercial Purpose (Undeveloped) 5 to 10 Guntas</td>
                            <td className='text-right'>-50.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>09</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Commercial Purpose (Undeveloped) more than 10 Guntas</td>
                            <td className='text-right'>50.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <td className='text-center'>10</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Commercial Purpose (Undeveloped) more than 10 Guntas</td>
                            <td className='text-right'>60.00</td>
                            <td className='text-right'>5,00,000.00</td>
                        </tr>
                        <tr>
                            <td className='text-center'>11</td>
                            <td className='text-center'><input type="radio" /></td>
                            <td className='text-center'><input type="radio" /></td>
                            <td>Converted Property for Industrial Purpose (Undeveloped) more than 10 Guntas</td>
                            <td className='text-right'>25.00</td>
                            <td className='text-right'>0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{marginTop:"30px",marginLeft:"600px"}}>
                    <button type="button" class="btn btn-primary btn-lg m-4"  onClick={valuate}>Valuate</button>
                </div>
                <div style={{marginTop:"40px",marginLeft:"30px",marginRight:"30px"}}>
                <table class="table table-bordered table-sm">
                        <tbody>
                        <tr>
                            <td className='text-center'> <b>Annexure Rules Valuation </b>  </td>
                            <td className='text-right'><b>19,00,000.00</b></td>
                        </tr>
                        <tr>  
                            <td className='text-center'><b>Total Valuation Amount</b></td>
                            <td className='text-right'><b>69,00,000.00</b></td>
                        </tr>
                        </tbody>
                </table>
                    </div>
                    <div style={{marginTop:"40px",marginLeft:"590px"}}>
                        <button type="button" class="btn btn-primary btn-lg" onClick={prosche} >Save and Continue</button>
                    </div>
                 </div>
                 <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8'}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div> 
        </div>
    </>
  );
};
export default MarketValuation;