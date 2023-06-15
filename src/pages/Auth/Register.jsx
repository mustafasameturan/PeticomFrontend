import React, { useEffect, useState } from "react";
import { GoogleIcon } from "../../assets/img";
import { Input, Loading } from "../../components";
import { handleCheckbox } from "../../components/Utility";
import { RegisterService, SendVerificationCode } from "../../services/AuthService";
import { ToastSuccess, ToastError, ToastDefault } from "../../components/Toastr";
import classNames from "classnames";
import "../../assets/css/register.css";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { url } from "../../routes/Utility";
import { RegisterTermsModal } from "./components";
import { Modal } from "../../components/Modal";

const Register = () => {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptRights, setAcceptRights] = useState(false);
  const [userId, setUserId] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    const model = {
      phoneNumber: phoneNumber,
      fullName: name + " " + surname,
      email: email,
      password: password
    };

    const response = await RegisterService(model);

    if(response.statusCode === 200){
      setUserId(userId => response.data?.id);
    } else {
      setLoading(loading => false);
      ToastError(response.error.errors[0]);
    }
  }

  const sendVerificationCode = async (userId) => {
    
    const response = await SendVerificationCode(userId);
    
    if(response.statusCode === 200){
      setLoading(loading => false);
      ToastDefault("Başarıyla kayıt olundu. Doğrulama kodu e-posta adresinize gönderildi!");
      navigate(url("auth.verificate"), { state: { userId: userId } });
    } else {
      ToastError(response.error.errors[0]);
    }
  };

  useEffect(() => {
    if(userId?.length > 0){
      sendVerificationCode(userId);
    }
  }, [userId])

  return (
    <>
      <div className="container mx-auto md:w-[500px]">
        <div
          id="signupsections"
          className="grid grid-cols-1 mt-20 mb-28"
        >
          <div className="signupsection w-full h-full">
            <h3 id="afterline">Kayıt Ol</h3>
            <div className="signup inputarea">
              <form onSubmit={submitHandle}>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="name" className='mr-[253px] mb-1 text-lg font-medium'>Ad</label>
                  <Input
                    id="name" 
                    placeholder="Adınızı giriniz"
                    type="text"
                    setState={setName}
                  />
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="surname" className='mr-[230px] mb-1 text-lg font-medium'>Soyad</label>
                  <Input
                    id="surname" 
                    placeholder="Soyadınızı giriniz"
                    type="text"
                    setState={setSurname}
                  />                
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="email" className='mr-[212px] mb-1 text-lg font-medium'>E-Posta</label>
                  <Input
                    id="email" 
                    placeholder="E-Postanızı giriniz"
                    type="text"
                    setState={setEmail}
                  />
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="phone-number" className='mr-[136px] mb-1 text-lg font-medium'>Telefon Numarası</label>
                  <Input
                    id="phone-number" 
                    placeholder="5XX XXX XX XX"
                    type="text"
                    setState={setPhoneNumber}
                  />
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="password" className='mr-[240px] mb-1 text-lg font-medium'>Şifre</label>
                  <Input
                    id="password" 
                    placeholder="Şifrenizi giriniz"
                    type="password"
                    setState={setPassword}
                  />
                </div>

                <div className="flex flex-row gap-1 items-center justify-center px-[10px] pb-4 termbox">
                  <label className="flex justify-end items-center mt-3 mr-3">
                    <input
                      id="rights"
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setAcceptRights(!acceptRights)}
                    />
                    <label
                      htmlFor="rights" 
                      className={`${handleCheckbox(acceptRights)} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                    >
                      <span className={classNames('text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden' : !acceptRights})}>
                        done
                      </span>
                    </label>
                    <p className="cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }}>Şartları kabul ediyorum.</p>
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="bg-white hover:bg-[#F8F6F4] rounded-full w-32 text-lg h-9 items-center justify-center"
                  onClick={() => setLoading(loading => true)}
                >
                  {loading ? (
                    <Loading showText="notShow" />
                  )  :(
                    <p>Kayıt Ol</p>
                  )}
                </button>
              </form>
              <div className="or">veya</div>
              <a href="#" className="google-signup-icon">
                <img
                  className="google-signup-icon w-[30px]"
                  src={GoogleIcon}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {(Object.keys(modalContent).length !== 0) && (
        <Modal modal={modal} setModal={setModal} classes={ {modal: 'h-[90vh] max-w-[1140px]'} }>
            {modalContent.element === "identity" && <RegisterTermsModal classes="!h-[80vh]" /> }
            
        </Modal>
      )}
    </>
  );
};

export default Register;
