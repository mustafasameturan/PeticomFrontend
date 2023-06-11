import React, { useState } from "react";
import "../../assets/css/login.css";
import { GoogleIcon } from "../../assets/img";
import { Input, Button, Loading } from "../../components";
import { useNavigate } from "react-router-dom";
import { url } from "../../routes/Utility";
import { ToastDefault, ToastError, ToastInfo } from "../../components/Toastr";
import { validateEmail } from "../../components/Utility";
import { LoginService } from "../../services/AuthService";
import { getCookie } from "ko-basic-cookie";
import { cookieName } from "../../components/Constants";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/UserSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    if(email.length === 0 || password.length === 0){
      ToastInfo("Lütfen tüm bilgileri eksiksiz giriniz!");
    } else if(email.length !== 0 && !validateEmail(email)){
      ToastInfo("E-Posta formatınız hatalı!");
    }

    const model = {
      email: email,
      password: password
    };

    const response = await LoginService(model);

    if(response.statusCode === 200){
      const token = response.data.token;

      dispatch(userLogin({ token }));
      navigate(url("home"));
      ToastDefault("Giriş başarılı!");
    } else {
      ToastError(response.error.errors[0]);
    }

    setLoading(loading => false);
  }

  return (
    <div className="container mx-auto">
      <div className="login-section">
        <div className="login-text">
          <h1>Giriş Yap</h1>
        </div>
        <form onSubmit={submitHandle} className="login-inputarea">
          <div className="flex flex-col items-center justify-center px-[10px] pb-4">
            <label htmlFor="email" className='mr-[218px] mb-1 text-lg font-medium'>E-Posta</label>
            <Input
              id="email" 
              text="E-Posta"
              placeholder="E-Postanızı giriniz"
              type="text"
              setState={setEmail}
            />
          </div>
          <div className="flex flex-col items-center justify-center px-[10px] pb-4">
            <label htmlFor="password" className='mr-[244px] mb-1 text-lg font-medium'>
              Şifre
            </label>
            <Input 
              id="password"
              text="Şifre"
              placeholder="Şifrenizi giriniz"
              type="password"
              setState={setPassword}
            />
          </div>
          {/* <Button 
            type="submit"
            text="Giriş Yap"
            classnames="mt-2"
            action={() => setLoading(loading => true)}
          /> */}

          <button 
            type="submit" 
            className="bg-white hover:bg-[#F8F6F4] rounded-full w-32 text-lg h-9 items-center justify-center"
            onClick={() => setLoading(loading => true)}
          >
            {loading ? (
              <Loading showText="notShow" />
            )  :(
              <p>Giriş Yap</p>
            )}
          </button>
        </form>
        <div className="forgot-password-text hover:text-white">
          <button className="font-[20px]"  onClick={() => navigate(url("auth.forgot"))}>Şifremi Unuttum</button>
        </div>
        <div className="or">veya</div>
        <a href="#" className="google-signup-icon">
          <img
            height="10"
            width="10"
            className="google-signup-icon w-[75px]"
            src={GoogleIcon}
            alt=""
          />
        </a>
        <div className="loginpage-signup-link">
          <h3>Hesabınız yok mu?</h3>
          <button onClick={() => navigate(url("auth.register"))}>
            <h3 className="text-white hover:text-black">Kayıt Olun!</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
