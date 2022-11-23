import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/store/auth";
import { GoogleLogin } from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Login.module.scss";
import { useContext } from "react";
import UserContext from "../../Context/Usercontext";

function Login() {
  let ctx = useContext(UserContext);

  const dispatch = useDispatch();

  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const onSuccess = (res) => {
    ctx.User = res.profileObj;
    dispatch(logIn());
    toast.success(`Logged in, welcome ${res.profileObj.name}`);
  };

  const onFailure = () => {
    toast.error(`oh , you should log again`);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_container_ctx}>
        <h3 className={styles.login_container_ctx_text}>
          Hello, Sign in to See your Dashboard
        </h3>

        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Gmail"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={false}
        />
      </div>
    </div>
  );
}

export default Login;
