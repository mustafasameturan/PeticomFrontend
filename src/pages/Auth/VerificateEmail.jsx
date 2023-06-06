import React, { useState } from 'react'
import { Loading, Input } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../assets/css/register.css";
import { VerificateEmailService } from '../../services/AuthService';
import { ToastDefault, ToastError } from '../../components/Toastr';
import { url } from '../../routes/Utility';

const VerificateEmail = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location?.state?.userId || false;  

  const [loading, setLoading] = useState(false);  
  const [verificationCode, setVerificationCode] = useState("");
    
  const submitHandle = async (e) => {
    e.preventDefault();

    const response = await VerificateEmailService(userId, verificationCode);

    console.log(response);
    if(response.statusCode === 200){
        setLoading(loading => false);
        ToastDefault("E-Posta başarıyla doğrulandı!");
        navigate(url("auth.login"));
    } else {
        ToastError("İşlem başarısız oldu!");
    }
  };

  return (
    <div className="container mx-auto w-[500px]">
        <div
            id="signupsections"
            className="grid grid-cols-1 md:grid-cols-1 mt-20"
        >
        <div className="signupsection right !h-[35vh]">
            <h3 id="afterline">E-Posta Doğrulama</h3>
            <div className="signup inputarea">
                <form onSubmit={submitHandle}>
                    <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                        <label htmlFor="verification-code" className='mr-[140px] mb-1 text-lg font-medium'>Doğrulama Kodu</label>
                        <Input
                            id="verification-code" 
                            placeholder="Doğrulama kodu"
                            type="text"
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

export default VerificateEmail;