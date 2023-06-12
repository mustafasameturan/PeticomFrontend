import React, { useState } from 'react'
import { Loading, Input } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../assets/css/register.css";
import { VerificateEmailService } from '../../services/AuthService';
import { ToastDefault, ToastError, ToastInfo } from '../../components/Toastr';
import { url } from '../../routes/Utility';
import { checkNumber } from '../../components/Utility';
import { ConfirmVerificationCodeForResetPassword, SendVerificationCodeForResetPassword } from '../../services/PasswordService';

const VerificationCodePassword = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const email = location?.state?.email || false;
  
    const [loading, setLoading] = useState(false);  
    const [verificationCode, setVerificationCode] = useState("");
      
    const submitHandle = async (e) => {
      e.preventDefault();

      let valid = true;

      if(!email){
        valid = false;
        ToastError("E-Posta adresi bulunamadı! Lütfen bir önceki adıma geçiniz.");
      }
      if(verificationCode.length === 0){
        ToastInfo("Doğrulama kodu alanı boş geçilemez!");
        valid = false;
      }

      if(valid){
          
          let model = {
            email: email,
            verificationCode: verificationCode
          }
    
          const response = await ConfirmVerificationCodeForResetPassword(model);
    
          if(response.statusCode === 200){
              navigate(url("auth.reset"), { state: { email: email }});
          } else {
              ToastError(response.error.errors[0]);
          }
      }

      setLoading(loading => false);  
    };
  
    return (
      <div className="container mx-auto w-[500px]">
          <div
              id="signupsections"
              className="grid grid-cols-1 md:grid-cols-1 mt-20"
          >
          <div className="signupsection right !h-[35vh]">
              <h3 id="afterline">Şifre Sıfırlama</h3>
              <div className="signup inputarea">
                  <form onSubmit={submitHandle}>
                      <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                          <label htmlFor="verification-code" className='mr-[140px] mb-1 text-lg font-medium'>Doğrulama Kodu</label>
                          <Input
                              id="verification-code" 
                              placeholder="Doğrulama kodu"
                              onKeyDown={(e) => !checkNumber(e) && e.preventDefault()}
                              setState={setVerificationCode}
                          />
                      </div>
  
                      <button 
                          type="submit" 
                          className="bg-white hover:bg-[#F8F6F4] rounded-full w-32 text-lg h-9 items-center justify-center"
                          onClick={() => setLoading(loading => true)}
                      >
                          {loading ? (
                              <Loading showText="notShow" />
                          )  :(
                              <p>Doğrula</p>
                          )}
                      </button>
                  </form>
              </div>
          </div>
          </div>
      </div>
    )
  }


export default VerificationCodePassword