import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import party from "../assets/img/avatars/party-3.png";
import plus from "../assets/img/avatars/plus.png";
import left from "../assets/img/avatars/left.png";
import check from "../assets/img/avatars/checked.png";
import right from "../assets/img/avatars/right.png";

import { useForm } from 'react-hook-form';

const PDetailsExecutant2 = () => {
    const{register,handleSubmit, formState: { errors }}=useForm()

    const onSubmit=()=>{

    }
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
              src={back} alt="pic"
            />
          </div>
          <div className="d-flex flex-column ml-5" style={{marginBottom:'20px'}}>
                <div className="p-1 font-weight-bold ml-3"
                  style={{
                    fontSize: "26px",
                    top: "388px",
                    left: "298px",
                    width: "1100px",
                    height: "48px",
                  }}>
                  <p>Now, lets enter the party details</p>
                </div>
                </div>
         </div>
         <div className="d-flex flex-row">
         <div className="card shadow-lg bg-white m-5"
           style={{
             width: "400px",
             height: "380px",
           }}
         >
           <div className="mt-5 ml-5">
             <p className="font-weight-bold" style={{ fontSize: "20px" }}>
               Select the Party
             </p>
           </div>
           <div className="m-3">
             <div>
               <div className="d-flex flex-row align-items-center">
                 <div>
                   <img
                     style={{
                       top: "510px",
                       left: "71px",
                       width: "80px",
                       height: "80px",
                     }}
                     src={party} alt=''
                   />
                 </div>
                 <div className="d-flex flex-row justify-content-between align-items-center ml-3 ">
                   <div
                     className="border border-muted rounded-3 d-flex flex-row align-items-center"
                     style={{
                       width: "250px",
                       height: "40px",
                     }}
                   >
                     <span
                       className="ml-3"
                       style={{
                         fontWeight: "bold",
                         color: "#4E4E4E",
                         fontSize: "16px",
                       }}
                       href="#"
                     >
                       PRESENTER
                       <img style={{marginLeft:'120px'}} src={check} alt=''/>
                     </span>
                     <span></span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-4">
               <div className="d-flex flex-row align-items-center">
                 <div>
                   <img
                     style={{
                       top: "510px",
                       left: "71px",
                       width: "80px",
                       height: "80px",
                     }}
                     src={party} alt=''
                   />
                 </div>
                 <div className="d-flex flex-row justify-content-between align-items-center ml-3  ">
                   <div
                     className="border border-muted  rounded-3  d-flex flex-row align-items-center"
                     style={{
                       width: "250px",
                       height: "40px",
                     }}
                   >
                     <span
                       className="ml-3"
                       style={{
                         fontWeight: "bold",
                         color: "#4E4E4E",
                         fontSize: "16px",
                       }}
                       href="#"
                     >
                       EXECUTANT
                     </span>
                     <span></span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-4">
               <div className="d-flex flex-row align-items-center">
                 <div>
                   <img
                     style={{
                       top: "510px",
                       left: "71px",
                       width: "80px",
                       height: "80px",
                     }}
                     src={party} alt=''
                   />
                 </div>
                 <div className="d-flex flex-row justify-content-between align-items-center ml-3  ">
                   <div
                     className="border border-muted  rounded-3  d-flex flex-row align-items-center"
                     style={{
                       width: "250px",
                       height: "40px",
                     }}
                   >
                     <span
                       className="ml-3"
                       style={{
                         fontWeight: "bold",
                         color: "#4E4E4E",
                         fontSize: "16px",
                       }}
                       href="#"
                     >
                       CONSENTING WITNESS
                     </span>
                     <span></span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      <div class="card shadow-lg bg-white rounded-3 m-5" style={{width:"1000px",height: "2009px",marginLeft:"30px",marginTop:"30px" }} >
          <h4 className='m-4'><b>Enter the Details</b></h4>
          <div class="btn-group" role="group" >
        
          <div class="btn-group" role="group" >
            <button type="button" class="btn btn-light btn-lg"><img src={left} alt=""></img></button>
        </div>
        
        <button type="button" class="btn btn-primary btn-lg disabled" >EXECUTAN 1</button>
            <button type="button" class="btn btn-primary btn-lg " >Executant 2 <button type="button" class="btn-close text-white " style={{float:"right"}} ></button></button>
            
        <div class="btn-group" role="group" >
            <button type="button" class="btn btn-light btn-lg"><img src={plus} alt=""></img></button>
        </div>
        
        <button type="button" class="btn btn-muted btn-lg"></button>
       
        <div class="btn-group" role="group" >
            <button type="button" class="btn btn-light btn-lg"><img src={right} alt="" ></img></button>
        </div>
        </div>
        <div class="row ml-4" style={{marginTop:'50px'}}>
                  <div className="col-md-3">
                  <p>Is Claimant</p> 
                  </div>
                  <div className="col-md-3">
                  <div class="form-check">
                  <input  name="a" type="radio" />
                  <label class="form-check-label"><span style={{marginLeft:'10px'}}>Yes</span></label>
                  </div> 
                  </div>
                  <div className="col-md-3">
                  <div class="form-check">
                  <input name="a" type="radio"/>
                  <label class="form-check-label" ><span style={{marginLeft:'10px'}}>No</span></label>
                  </div> 
                  </div>
                  </div>
                  <div class="row ml-4" style={{marginTop:'30px'}}>
                  <div className="col-md-3">
                  <p>Whether Individual or Organization</p> 
                  </div>
                  <div className="col-md-3">
                  <div class="form-check">
                  <input name="b" type="radio" checked/>
                  <label class="form-check-label" ><span style={{marginLeft:'10px'}}>Individual</span></label>
                  </div> 
                  </div>
                  <div className="col-md-3">
                  <div class="form-check">
                  <input name="b" type="radio"/>
                  <label class="form-check-label"><span style={{marginLeft:'10px'}}>Organization</span></label>
                  </div> 
                  </div>
                  </div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <div class="row ml-4" style={{position: "relative", top:"50px"}}>
                <div class="col-md-4 "  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}  ><b>First Name<span className='text-danger' >*</span></b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px",}} className="mt-4" placeholder='Value' 
                    {...register("firstname",{
                        required:"Firstname is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.firstname && errors.firstname.message}</p>
                </div>
                <div class="col-md-4"  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Middle Name</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-4" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Last Name</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                </div>

                <div class="row ml-4" style={{position: "relative", top:"70px"}}>
                <div class="col-md-4" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Alias Name</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-4 ">
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>Age<span className='text-danger' >*</span></b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value'  
                    {...register("Age",{
                        required:"Age is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.Age && errors.Age.message}</p>
                </div>
                <div class="col-md-4"  >
                    <lable style = {{top: "559px",left: "440px",width:   "135px",height: "21px"}}><b>Gender<span className='text-danger' >*</span></b></lable><br />
                    <select  style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4"
                    {...register("gender",{
                        required:"Select Gender"
                     })}>

                 
                   <option value="">Value</option>
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                    </select> 
                </div>
               
                <div class="col-md-4" style={{marginTop:"30px"}}>
                    <lable style = {{top: "559px",left: "440px",width: "135px",height: "21px"}}><b>Profession</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-4" style={{marginTop:"30px"}}>
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>PAN</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} 
                    className="mt-4" placeholder='Value' /><span style={{color:'blue',marginLeft:'10px'}}>Verify</span>
                </div>
                <div class="col-md-4" style={{marginTop:"30px"}}>
                <div class="">
                <input type="checkbox"/>
                <label class="form-check-label" style={{marginLeft:'4px'}}>I don't have a PAN</label>
                </div> 
                </div>
                </div>
                <div className='ml-4' style={{position: "relative", top:"120px"}}>
                <label>Address Details<span className='text-danger' >*</span></label>
                </div>
                <div class="row ml-4" style={{position: "relative", top:"140px"}}>
                <div class="col-md-4 "  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>House No./Building Name<span className='text-danger' >*</span></b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value'
                    {...register("HouseNoBuildingName",{
                        required:"House No./Building Name is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.HouseNoBuildingName && errors.HouseNoBuildingName.message}</p>
                </div>
                <div class="col-md-4"  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Street Address<span className='text-danger' >*</span> </b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' 
                    {...register("StreetAddress",{
                        required:"Street Address is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.StreetAddress && errors.StreetAddress.message}</p>
                </div>
                <div class="col-md-4" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>State<span className='text-danger' >*</span></b></lable><br />
                    <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4"
                    {...register("select",{
                        required:true
                    })}>
                    <option>Value</option> 
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </select> 
                </div>
                </div>
                <div class="row ml-4" style={{position: "relative", top:"160px"}}>
                <div class="col-md-4 "  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>District<span className='text-danger' >*</span></b></lable><br />
                  <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4"
                  {...register("select",{
                    required:true
                })}>
                    <option>Value</option> 
                    <option>1</option> 
                    <option>2</option>
                    <option>3</option>
                    </select>  
                 
                </div>
                <div class="col-md-4"  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>City/Village</b></lable><br />
                  <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4"
                  {...register("select",{
                    required:true
                })}>
                    <option>Value</option> 
                    <option>1</option> 
                    <option>2</option>
                    <option>3</option>
                    </select>  
                </div>
                <div class="col-md-4" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>PIN Code<span className='text-danger' >*</span></b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' 
                    {...register("PINCode",{
                        required:"PIN Code is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.PINCode && errors.PINCode.message}</p> 
                </div>
                </div>
                <div class="row ml-4" style={{position: "relative", top:"180px"}}>
                <div class="col-md-4 "  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>Relationship<span className='text-danger' >*</span></b></lable><br />
                    <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} id="select" className="mt-4"
                    {...register("select",{
                        required:true
                    })}>
                    <option>Value</option> 
                    <option>1</option> 
                    <option>2</option>
                    <option>3</option>
                    </select> 
                   
                </div>
                <div class="col-md-4"  >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Relative's Name<span className='text-danger' >*</span></b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' 
                    {...register("RelativesName",{
                        required:"Relative's Name is required"
                     })} /> 

                 <p style={{color:'red'}}>{errors.RelativesName && errors.RelativesName.message}</p>
                </div>
                </div>
                <div style={{marginTop:'220px'}}>
                <div class="form-check">
                <input name="s" style={{marginRight:'10px'}}  type="radio"/>
                <label class="form-check-label">Represented by power of Attomey</label>
                </div> 
                <div class="form-check" style={{marginTop:'20px'}}>
                <input  name="s" style={{marginRight:'10px'}}  type="radio"/>
                <label class="form-check-label">Represented for Minor Guardian</label>
                </div>
                <div class="form-check" style={{marginTop:'20px'}}>
                <input style={{marginRight:'10px'}}  type="checkbox"/>
                <label class="form-check-label">Exempted from Personal Appearance (Section 88 Exempted)</label>
                </div> 
                </div>
                <div style={{position: "relative", top:"50px",marginLeft:"350px"}}>
                <button  class="btn btn-primary btn-lg" >Save and Continue</button>
                </div>
                </div>
            
            </form>
      </div>
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

export default PDetailsExecutant2;
