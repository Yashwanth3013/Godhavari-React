import { Upload } from 'devextreme-react/file-manager';
import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import upload from "../assets/img/avatars/upload.png";

const Approval1 = () => {

  const prosche = () => {
    window.location.href = "/ApplicantDashboard";
   };

  return (
    <div>
    <div class="card shadow-lg bg-white rounded m-5">
    <div className="p-5">
      <img
        style={{
          top: "253px",
          left: "55px",
          width: "56px",
          height: "22px",
        }}
        src={back} alt=""/>
    </div>
    <div className="d-flex flex-column ml-5 font-weight-bold ">
     <p style={{color:'#222222',fontSize: "25px",marginLeft:'50px'}}>Now, we just need to submit this document for Approval</p>
      <p className="font-weight-bold" style={{ color:'#707070',marginTop:'20px',fontSize: "15px",marginLeft:'50px'}}>Please review that all the information is correct, and submit the document for approval. Once submitted, you won't be able to make any changes.</p><br></br>
    </div>
    </div>
          <div class="card shadow-lg bg-white rounded m-5">
          <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
           <p style={{color:'#222222',marginTop:'40px'}}><spam style={{color:"blue"}}>|</spam> Property Details</p>
            <p  className="font-weight-bold" style={{ color:'#222222',marginTop:'20px',fontSize: "15px"}}>Property 1 of 1</p>
            <p  className="font-weight-bold" style={{ color:'#4E4E4E',marginTop:'20px',fontSize: "13px"}}>TYPE OF PROPERTY WITH DESCRIPTION : REGISTRATION OF 4 HMV, WITH RC KA01A1123, KA01A1124, KA01A1125, KA01A1126, 2 LMV WITH RC KA01A1127, KA01A1128.</p>
          </div>
          <div class="row ml-5" style={{marginTop:'20px'}}>
                  <div className="col-md-3">
                  <p>STAMP ARTICLE SELECTED<br></br>5-AGREEMENT</p> 
                  </div>
                  <div className="col-md-3">
                  <p>STAMP SUB ARTICLE SELECTED<br></br>5G- AGREEMENT OF SALE OF MOVABLE PROPERTY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>REGISTRATION FEE ARTICLE SELECTED<br></br>ARTICLE 2</p> 
                  </div>
                  <div className="col-md-3">
                  <p>BOOK NUMBER<br></br>4-MOVABLE PROPERTY</p> 
                  </div>
                </div><br></br>
               </div>
              <div class="card shadow-lg bg-white rounded m-5">
              <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
              <p style={{color:'#222222',marginTop:'40px'}}><spam style={{color:"blue"}}>|</spam> Fee Calculation</p>
               </div>
               <div style={{marginTop:"20px",marginLeft:"30px",marginRight:"30px"}}>
                     <table class="table table-bordered table-sm">
                        <tr><th className='row-sm-3'>Property 1 of 1<br></br><br></br><p>Registration of HMV</p></th>
                        </tr>
                        <tr>
                        <th>Consideration Amount</th>
                        <th>Total Consideration Amount</th>
                        <td style={{color:'#0A429B'}}><b>₹ 69,00,000.00</b></td>
                        </tr>
                        <tr>
                        <th className='row-sm-3'>Fee Calculation</th>
                        <th>Government Duty after Exemption (A)</th>
                        <td><b>₹ 50,000.00</b></td>
                        </tr>
                        <tr>
                        <th>Scanning Fees (B)</th>
                        <td><b>₹ 5,000.00</b></td>
                        </tr>
                        <tr>
                        <th>Denotation of Stamp duty (c)</th>
                        <td><b>₹ 5,000.00</b></td>
                        </tr>
                        </table>
                    </div>
                    
                       <div style={{marginTop:"10px",marginLeft:"30px",marginRight:"30px"}}>
                       <table class="table table-bordered table-sm">
                        <tbody>
                        <tr>
                            <td className='text-center'> <b>Total Stamp Duty (D)=(A)+(B)-(C) </b>  </td>
                            <td className='text-right' style={{color:'#0A429B'}}><b>₹ 61,000.00</b></td>
                        </tr>
                        <tr>  
                            <td className='text-center'><b>Total Registration Fees (E)</b></td>
                            <td className='text-right'style={{color:'#0A429B'}}><b>₹ 10,000.00</b></td>
                        </tr>
                        </tbody>
                     </table>
                    </div>
                    <div style={{marginTop:"10px",marginLeft:"30px",marginRight:"30px"}}>
                      <table class="table table-bordered table-sm">
                        <tbody>
                        <tr>
                            <td className='text-center'> <b>Total Payable Amount (D)+(E)</b>  </td>
                            <td className='text-right' style={{color:'#0A429B'}}><b>₹ 71,000.00</b></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
                <div class="card shadow-lg bg-white rounded m-5">
                <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
                <p style={{color:'#222222',marginTop:'40px'}}><spam style={{color:"blue"}}>|</spam> Party Details</p></div>
                <div className="m-4">
                <p style={{color:'#222222',marginLeft:'20px'}}><b>Presenter</b><spam style={{marginLeft:'120px'}}>INDIVIDUAL/ORGANIZATION : <b>INDIVIDUAL</b></spam></p>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                  <div className="col-md-3">
                  <p>FIRST NAME: TANMAY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>MIDDLE NAME: -</p> 
                  </div>
                  <div className="col-md-3">
                  <p>LAST NAME: SINHA</p> 
                  </div>
                  <div className="col-md-3">
                  <p>AGE: 26 YEARS</p> 
                  </div>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                <div className="col-md-3">
                <p>SEX : MALE</p> 
                </div>
                <div className="col-md-3">
                <p>ADDRESS: RANCHI, JHARKHAND</p> 
                </div>
                <div className="col-md-3">
                <p>PAN : ABCDE1234A</p> 
                </div>
                <div className="col-md-3">
                <p>PROFESSION : DESIGNER</p> 
                </div>
              </div>
              <hr style={{marginLeft:'30px',marginRight:'30px',marginTop:'40px'}}></hr>
               <div>
               <div className="m-4">
                <p style={{color:'#222222',marginLeft:'20px',marginTop:'50px'}}><b>Claimant 1 of 1</b><spam style={{marginLeft:'120px'}}>INDIVIDUAL/ORGANIZATION : <b>INDIVIDUAL</b></spam></p>
                </div>
                <div class="row ml-5" style={{marginTop:'50px'}}>
                  <div className="col-md-3">
                  <p>FIRST NAME: TANMAY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>MIDDLE NAME: -</p> 
                  </div>
                  <div className="col-md-3">
                  <p>LAST NAME: SINHA</p> 
                  </div>
                  <div className="col-md-3">
                  <p>AGE: 26 YEARS</p> 
                  </div>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                <div className="col-md-3">
                <p>SEX : MALE</p> 
                </div>
                <div className="col-md-3">
                <p>ADDRESS: RANCHI, JHARKHAND</p> 
                </div>
                <div className="col-md-3">
                <p>PAN : ABCDE1234A</p> 
                </div>
                <div className="col-md-3">
                <p>PROFESSION : DESIGNER</p> 
                </div>
              </div>
              <hr style={{marginLeft:'30px',marginRight:'30px',marginTop:'40px'}}></hr>
               </div>
               <div className="m-4">
               <p style={{color:'#222222',marginLeft:'20px',marginTop:'50px'}}><b>Executant 1 of 1</b><spam style={{marginLeft:'120px'}}>INDIVIDUAL/ORGANIZATION :<b>ORGANIZATION</b></spam></p>
               </div>
               <div class="row ml-5" style={{marginTop:'10px'}}>
                 <div className="col-md-3">
                 <p>ORGANIZATION NAME: ABC CORPORATION</p> 
                 </div>
                 <div className="col-md-3">
                 <p>ORGANIZATION ID: 1234567890</p> 
                 </div>
                 <div className="col-md-3">
                 <p>REGISTERED ADDRESS: BANGALORE</p> 
                 </div>
                 <div className="col-md-3">
                 <p>PAN/TIN/TAN: ABCDE1234A</p> 
                 </div>
               </div>
               <p style={{color:'#4E4E4E',marginLeft:'35px',marginTop:'20px'}}><b>REPRESENTED BY:</b></p>
               <div class="row ml-5" style={{marginTop:'10px'}}>
                  <div className="col-md-3">
                  <p>FIRST NAME: TANMAY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>MIDDLE NAME: -</p> 
                  </div>
                  <div className="col-md-3">
                  <p>LAST NAME: SINHA</p> 
                  </div>
                  <div className="col-md-3">
                  <p>AGE: 26 YEARS</p> 
                  </div>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                <div className="col-md-3">
                <p>SEX : MALE</p> 
                </div>
                <div className="col-md-3">
                <p>ADDRESS: RANCHI, JHARKHAND</p> 
                </div>
                <div className="col-md-3">
                <p>PAN : ABCDE1234A</p> 
                </div>
                <div className="col-md-3">
                <p>PROFESSION : DESIGNER</p> 
                </div>
              </div>
              <hr style={{marginLeft:'30px',marginRight:'30px',marginTop:'40px'}}></hr>
              <div className="m-4">
                <p style={{color:'#222222',marginLeft:'20px'}}><b>Witness 1 of 2</b><spam style={{marginLeft:'120px'}}>INDIVIDUAL/ORGANIZATION : <b>INDIVIDUAL</b></spam></p>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                  <div className="col-md-3">
                  <p>FIRST NAME: TANMAY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>MIDDLE NAME: -</p> 
                  </div>
                  <div className="col-md-3">
                  <p>LAST NAME: SINHA</p> 
                  </div>
                  <div className="col-md-3">
                  <p>AGE: 26 YEARS</p> 
                  </div>
                </div>
                <div class="row ml-5" style={{marginTop:'20px'}}>
                <div className="col-md-3">
                <p>SEX : MALE</p> 
                </div>
                <div className="col-md-3">
                <p>ADDRESS: RANCHI, JHARKHAND</p> 
                </div>
                <div className="col-md-3">
                <p>PAN : ABCDE1234A</p> 
                </div>
                <div className="col-md-3">
                <p>PROFESSION : DESIGNER</p> 
                </div>
              </div>
              <hr style={{marginLeft:'30px',marginRight:'30px',marginTop:'40px'}}></hr>
               <div>
               <div className="m-4">
                <p style={{color:'#222222',marginLeft:'20px',marginTop:'50px'}}><b>Witness 2 of 2</b><spam style={{marginLeft:'120px'}}>INDIVIDUAL/ORGANIZATION : <b>INDIVIDUAL</b></spam></p>
                </div>
                <div class="row ml-5" style={{marginTop:'50px'}}>
                  <div className="col-md-3">
                  <p>FIRST NAME: TANMAY</p> 
                  </div>
                  <div className="col-md-3">
                  <p>MIDDLE NAME: -</p> 
                  </div>
                  <div className="col-md-3">
                  <p>LAST NAME: SINHA</p> 
                  </div>
                  <div className="col-md-3">
                  <p>AGE: 26 YEARS</p> 
                  </div>
                </div>
                <div class="row ml-5" style={{marginTop:'20px',marginBottom:'40px'}}>
                <div className="col-md-3">
                <p>SEX : MALE</p> 
                </div>
                <div className="col-md-3">
                <p>ADDRESS: RANCHI, JHARKHAND</p> 
                </div>
                <div className="col-md-3">
                <p>PAN : ABCDE1234A</p> 
                </div>
                <div className="col-md-3">
                <p>PROFESSION : DESIGNER</p> 
                </div>
                </div>
                </div>
                </div>
                <div class="card shadow-lg bg-white rounded m-5 " style={{height:"250px"}}>
                <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
                <p style={{marginTop:'40px'}}><spam style={{color:"blue"}}>|</spam> Upload Deed Document</p>
                </div>
                <div style={{color:'#4E4E4E',marginLeft:'30px',marginTop:'10px'}}>
                <p>Please upload the draft Deed document for review</p>
                <div class="input-group" style={{height:"50px",width:"370px"}}>
                <input type="text" class="form-control" style={{height:"50px"}}/>
                <span class="input-group-text"> <img src={upload} alt="" height="40px" width="20px"/></span><br></br>
                <button class="btn btn-primary" style={{width:'90px',height:'50px',marginLeft:'20px'}}>Upload</button>
                </div>
                </div>
                </div>
                <div class="card shadow-lg bg-white rounded m-5" style={{marginTop:'50px'}}>
                <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
                <p style={{marginTop:'40px'}}><spam style={{color:"blue"}}>|</spam> Select Sub registrar office</p>
                </div>
                <div style={{color:'#4E4E4E',marginLeft:'30px',marginTop:'10px'}}>
                <p>Please select the Sub-registrar office for Registration</p>
                <div class="m-4">
                <select style = {{width: "400px", height: "42px",borderRadius:"5px"}}>
               <option style={{marginTop:"10px"}} value=""></option>
                </select>
            </div>
                </div>
               
                </div>
                <div class="card shadow-lg bg-white rounded m-5">
                <div className="d-flex flex-column ml-5 font-weight-bold" style={{ fontSize: "20px"}}>
                <p style={{marginTop:'20px'}}><spam style={{color:"blue"}}>|</spam> Declaration</p></div>
                <div>
                <div className="d-flex" style={{color:'#4E4E4E',marginTop:"10px",marginLeft:"40px"}} >
                        <input type="checkbox"  id="check1" name="checkbox"   />
                        <label style={{marginLeft:"5px"}} >I hereby confirm that, all the information provided are correct to the best of my knowledge. Also, I understand that, in case any information is found incorrect, misleading or fraudulant, there can be action taken against me and it may or may not lead to the cancellation of this document.</label></div>
                        <div style={{marginLeft:'60px',marginTop:'30px',marginBottom:'50px'}}>
                        <p>Date: 01-Oct-2021</p>
                        <p>Place: Ranchi</p>
                     </div>
                 </div>
            </div>
            <div className='d-flex'>
            <div style={{marginLeft:'650px'}}>
            <button onClick={prosche} style={{color:'#0A429B'}} type="button" class="btn btn-lg">Cancel</button>
            </div>
            <div style={{marginLeft:'80px'}}>
                <button onClick={prosche} class="btn btn-primary btn-lg" >Agree and Submit</button>
                </div>
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

export default Approval1;
