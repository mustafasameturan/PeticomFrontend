import React, { useState } from 'react'
import { Loading, Input } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../assets/css/register.css";
import { VerificateEmailService } from '../../services/AuthService';
import { ToastDefault, ToastError } from '../../components/Toastr';
import { url } from '../../routes/Utility';
import { validateEmail } from '../../components/Utility';
import { SendVerificationCodeForResetPassword } from '../../services/PasswordService';

const ForgotPasswordSendEmail = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);  
  const [email, setEmail] = useState("");
    
  const submitHandle = async (e) => {
    e.preventDefault();

    let valid = true;

    if(!validateEmail(email)){
        valid = false;
        ToastError("E-Posta formatınız hatalı!");
    }

    if(valid){
        const response = await SendVerificationCodeForResetPassword(email);

        if(response.statusCode === 200){
            ToastDefault("Şifre sıfırlama kodu başarıyla gönderildi!");
            navigate(url("auth.verificatepassword"), { state: { email: email }});
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
                        <label htmlFor="reseted-email" className='mr-[160px] mb-1 text-lg font-medium'>E-Posta Adresi</label>
                        <Input
                            id="reseted-email" 
                            placeholder="E-Posta Adresinizi Girin"
                            type="text"
                            setState={setEmail}
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
                            <p>Gönder</p>
                        )}
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ForgotPasswordSendEmail;