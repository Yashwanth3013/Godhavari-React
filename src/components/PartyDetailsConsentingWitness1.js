import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import check from "../assets/img/avatars/checked.png";
import party3 from "../assets/img/avatars/party-3.png";
import plus from "../assets/img/avatars/plus.png";
import back1 from "../assets/img/avatars/back1.png";
import fw from "../assets/img/avatars/fw.png";
import { useForm } from 'react-hook-form';
const PartyDetailsConsentingWitness1 = () => {
    const{register,handleSubmit,formState}=useForm()
    const onSubmit=()=>{
    }
  return(
      <>
    <div>
        <div class="card shadow-lg bg-white rounded  " style={{
                width: "1200px",
                height: "200px",
                marginLeft:"80px",
                marginTop:"30px"
              }} >
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
          <div style={{marginLeft:"50px"}} >
           <h1 ><b>Now, lets enter the party details</b></h1>
          </div>
          </div>
          <div className='row'>
          <div class="card shadow-lg bg-white rounded-3 col-md-3 " style={{height: "300px",marginLeft:"90px",marginTop:"30px" }} >
              <h4 style={{marginLeft:"30px",marginTop:"10px"}}>Select the Party</h4>
              <div style={{marginTop:"10px",marginLeft:"20px"}}>
                  <img src={party3} /><span className="border border-muted m-5 rounded-3 p-2" >PRESENTER<img src={ check } style={{marginLeft:"60px"}}/> </span><br /><br />
                  <img src={party3} /><span className="border border-muted m-5 rounded-3 p-2" >EXECUTANT<img src={ check }style={{marginLeft:"60px"}}/> </span><br /><br />
                  <img src={party3} /><span className="border border-muted m-5 rounded-3 p-2" >CONSENTING WITNESS </span>
              </div>
          </div>
          <div class="card shadow-lg bg-white rounded-3 col-md-7 " style={{width:"830px",height: "1150px",marginLeft:"20px",marginTop:"30px" }} >
              <h1 className='m-4'><b>Enter the Details</b></h1>
              <div class="btn-group" role="group" >
            
              <div class="btn-group" role="group" >
                <button type="button" class="btn btn-light btn-lg"><img src={back1} ></img></button>
            </div>
            
                <button type="button" class="btn btn-primary btn-lg " >WITNESS 1</button>
               
            <div class="btn-group" role="group" >
                <button type="button" class="btn btn-light btn-lg"><img src={plus} ></img></button>
            </div>
            
            <button type="button" class="btn btn-muted btn-lg"></button>
           
            <div class="btn-group" role="group" >
                <button type="button" class="btn btn-light btn-lg"><img src={fw} ></img></button>
            </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <div class="row ml-4" style={{position: "relative", top:"50px"}}>
                    <div class="col-md-4 "  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} >
                            <b>First Name<span className='text-danger' >*</span></b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} 
                        className="mt-4" placeholder='Value' 
                        {...register("firstname",{
                            required:"firstname is required"
                         })}/> 
                         <p style={{color:'red'}}>{formState.errors.firstname && formState.errors.firstname.message}</p>
                     
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
                    <div class="col-md-4 "  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>Age<span className='text-danger' >*</span></b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' 
                        {...register("Age",{
                            required:"Age is required"
                         })}/> 
                     <p style={{color:'red'}}>{formState.errors.Age && formState.errors.Age.message}</p>
                    </div>
                    <div class="col-md-4"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Gender<span className='text-danger' >*</span></b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>Male</option> 
                        <option>Female</option>
                        <option>Others</option>
                        </select> 
                    </div>
                    <div class="col-md-4" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Profession</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
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
                            required:"HouseNo./BuildingName is required"
                         })}/> 
                     <p style={{color:'red'}}>{formState.errors.HouseNoBuildingName && formState.errors.HouseNoBuildingName.message}</p> 
                     
                    </div>
                    <div class="col-md-4"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Street Address<span className='text-danger' >*</span> </b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' 
                        {...register("StreetAddress",{
                            required:"Street Address is required"
                         })}/> 
                     <p style={{color:'red'}}>{formState.errors.StreetAddress && formState.errors.StreetAddress.message}</p> 
                    </div>
                    <div class="col-md-4" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>State<span className='text-danger' >*</span></b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4">
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
                      <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select>  
                     
                    </div>
                    <div class="col-md-4"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>City/Village</b></lable><br />
                      <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4">
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
                         })}/> 
                     <p style={{color:'red'}}>{formState.errors.PINCode && formState.errors.PINCode.message}</p> 
                    </div>
                    </div>
                    <div class="row ml-4" style={{position: "relative", top:"180px"}}>
                    <div class="col-md-4 "  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>Relationship<span className='text-danger' >*</span></b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                     
                    </div>
                    <div class="col-md-4"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Relative's Name<span className='text-danger' >*</span></b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value'
                        {...register("RelativeName",{
                            required:"Relative's Name is required"
                         })}/> 
                     <p style={{color:'red'}}>{formState.errors.RelativeName && formState.errors.RelativeName.message}</p> 
                    </div>
                    
                    </div>
                    <div class="row ml-4" style={{position: "relative", top:"200px",marginTop:"50px"}}>
                    <label style={{marginLeft:"5px"}}>Identifies</label> 

                        <div style={{marginTop:"30px",marginLeft:"10px"}} >
                            <input type="checkbox"  id="check1" name="Claimant"   />
                            <label style={{marginLeft:"5px"}} >Claimant</label>
                        </div>
                        <div style={{marginTop:"20px",marginLeft:"10px"}}>
                            <input type="checkbox"  id="check2" name="Executant"  />
                            <label style={{marginLeft:"5px"}} >Executant</label>
                        </div>
                    </div>
                    <div style={{position: "relative", top:"240px",marginTop:"20px",marginLeft:"350px"}}>
                    <button  class="btn btn-primary btn-lg" >Save and Continue</button>
                    </div>
                   
                    </div>
                </form>
          </div>
            </div>
          </div>
          </div>
          <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"100px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div> 
         
    </>
  ) ;
};

export default PartyDetailsConsentingWitness1;
