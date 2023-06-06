import React, { useState } from "react";
import "../../assets/css/login.css";
import { GoogleIcon } from "../../assets/img";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { url } from "../../routes/Utility";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mx-auto">
      <div className="login-section">
        <div className="login-text">
          <h1>Giriş Yap</h1>
        </div>
        <div className="login-inputarea">
          <div className="flex flex-col items-center justify-center px-[10px] pb-4">
            <label htmlFor="email" className='mr-[218px] mb-1 text-lg font-medium'>E-Posta</label>
            <Input
              id="email" 
              text="E-Posta"
              placeholder="E-Postanızı giriniz"
              type="email"
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
          <Button 
            type="submit"
            text="Giriş Yap"
            classnames="mt-2"
          />
        </div>
        <div className="forgot-password-text hover:text-white">
          <button className="font-[20px]">Şifremi Unuttum</button>
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
