import React from "react";
import { useHistory } from "react-router-dom";

const Step3=(handleDataChange, register_data)=>{

     const history=useHistory();
     const handleSubmit=()=>{
     history.push("/Login")
    }

    return(
     <div className="container">
        <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-outline-primary my-3">back</button>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-10">
           <div className="my-3">
            <h4 className="text-primary">Contact Person</h4>
           </div>
           <div className="row">
            <div className="col-sm-8">
                <div className="mb-3">
                <label for="floatingInput">Name</label>
                <input
                type="email" class="form-control mt-1" id="floatingInput" 
                value={register_data.name} 
                onChange={(e)=> handleDataChange(e, "name")}/>
                </div>
                <div className="mb-3">
                    <label for="floatingInput">Family Name</label>
                    <input
                    type="email" class="form-control mt-1"
                    id="floating-Input" value={register_data.family_name}
                    onChange={(e)=> handleDataChange(e, "family_name")}/>
                </div>
                <div className="mb-3">
                    <label for="floatingInput">Email</label>
                    <input
                    type="email" class="form-control mt-1"
                    id="floating-Input" value={register_data.email}
                    onChange={(e)=> handleDataChange(e, "email")}/>
                </div>
                <div className="mb-3">
                    <label for="floatingInput">Mobile Number</label>
                    <input
                    type="email" class="form-control mt-1"
                    id="floating-Input" value={register_data.mobile}
                    onChange={(e)=> handleDataChange(e, "mobile")}/>
                </div>
                <div>
                    <button className="btn btn-primary my-3"
                    onClick={()=> handleSubmit()}>Next</button>
                </div>
            </div>
           </div>
            </div>
        </div>
     </div>
    )
};
export default Step3;