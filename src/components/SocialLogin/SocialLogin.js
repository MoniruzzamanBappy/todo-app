import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from 'react-icons/bs';
import auth from "../../firebase.init";
import Loading from './../Loading/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error) {
    errorElement =  
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
  }
  if(loading){
    return <Loading></Loading>
  }
  if(user){
    navigate(from, { replace: true });
  }

  

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
      </div>
      {
        errorElement
      }
      <div>
      <button
      onClick={()=>signInWithGoogle()}
          type="button"
          className="btn d-flex justify-content-between align-items-center mt-0 my-2 btn-danger w-100 d-block mx-auto "
        >
          <span className="text-white ps-4">Google</span>
            <BsGoogle/>
        </button>
      
      </div>
    </div>
  );
};

export default SocialLogin;
