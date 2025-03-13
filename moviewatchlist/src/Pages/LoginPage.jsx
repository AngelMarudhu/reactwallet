import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { signInWithPopup } from "firebase/auth";
import google from "../assests/google.svg";
import { StyledButton } from "../Css/button.js";
import "../Css/loginpage.css";
import { auth, authProvider } from "../Utils/Firebase.jsx";
import {
  loginFailure,
  loginSuccess,
  loginInitialized,
} from "../Redux/LoginSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const { user, isLoggedIn } = useSelector((state) => {
    return state.login;
  });
  const navigate = useNavigate();
  const disPatch = useDispatch();

  const handleAuth = async () => {
    disPatch(loginInitialized());
    try {
      const result = await signInWithPopup(auth, authProvider);
      const user = result.user;
      ///// hey you must sent serialized user data to redux store or you will get warning buddy
      const { uid, displayName, email, photoURL } = user;
      disPatch(loginSuccess({ uid, displayName, email, photoURL }));
    } catch (error) {
      disPatch(loginFailure(error));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  // console.log(user, isLoggedIn)

  return (
    <div className="login-page">
      <div className="login-page-button">
        <h1>Login With Your Gmail</h1>
        <StyledButton onClick={handleAuth}>
          <img
            src={google}
            alt="auth icon"
            style={{ width: "40px", height: "40px" }}
          />
        </StyledButton>
      </div>
    </div>
  );
};

export default LoginPage;
