import React, { useState } from 'react'
import { Loading, Input } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../assets/css/register.css";
import { VerificateEmailService } from '../../services/AuthService';
import { ToastDefault, ToastError } from '../../components/Toastr';
import { url } from '../../routes/Utility';
import { checkNumber } from '../../components/Utility';
import { ResetPasswordService } from '../../services/PasswordService';

const ResetPassword = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || false;

  const [loading, setLoading] = useState(false);  
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
    
  const submitHandle = async (e) => {
    e.preventDefault();

    let valid = true;

    if(!email){
        valid = false;
        ToastError("E-Posta adresi bulunamadı! Lütfen bir önceki adıma geçiniz.");
    }
    if(newPassword !== newPasswordAgain){
        valid = false;
        ToastError("Girdiğiniz şifreler uyuşmuyor!");
    }

    if(valid){
        
        let model = {
            email: email,
            newPassword: newPassword,
            newPasswordAgain: newPasswordAgain
        }

        const response = await ResetPasswordService(model);

        if(response.statusCode === 200){
            navigate(url("auth.login"));
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
        <div className="signupsection right !h-[45vh]">
            <h3 id="afterline">Şifre Sıfırlama</h3>
            <div className="signup inputarea">
                <form onSubmit={submitHandle}>
                    <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                        <label htmlFor="new-password" className='mr-[240px] mb-1 text-lg font-medium'>Şifre</label>
                        <Input
                            id="new-password" 
                            placeholder="Şifre"
                            type="password"
                            setState={setNewPassword}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                        <label htmlFor="new-password-again" className='mr-[187px] mb-1 text-lg font-medium'>Şifre Tekrar</label>
                        <Input
                            id="new-password-again" 
                            placeholder="Şifre Tekrar"
                            type="password"
                            setState={setNewPasswordAgain}
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
                            <p>Değiştir</p>
                        )}
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ResetPassword