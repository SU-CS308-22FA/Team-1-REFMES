import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useStore } from "../../store/store";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx"
import axios from "axios";
import { useParams } from "react-router-dom";
import ResetPasswordInner from "./resetPasswordInner"
import ResetPasswordErrorInner from "./resetPasswordErrorInner";

function ResetPassword() {

  const{user_id, token} = useParams();
  const[LinkIsCorrect, setLinkIsCorrect] = useState(false);

  axios
    .get(`${process.env.REACT_APP_URL}/api/users/linkchecker/${user_id}/${token}`)
    .then(res => {

      if(res.status === 200 && res.data.msg){

        console.log("token is false");
        setLinkIsCorrect(false);
      }
      else{ // if the token is correct

        console.log("token is correct")
        setLinkIsCorrect(true);
      }

    });
    

  return (
    <div className="fullscreen row justify-content-center align-items-center">
      <AppNavBarSingle/>
      <div>
      {LinkIsCorrect && <ResetPasswordInner/>}
      {!LinkIsCorrect && <ResetPasswordErrorInner/>}
      </div>

    </div>
);
}

export default ResetPassword;