import React, { useState } from "react";
import { Button, Input } from "../../../../components";
import useAuth from "../../../../hooks/useAuth";
import { UpdatePasswordService } from "../../../../services/PasswordService";
import { ToastError, ToastSuccess } from "../../../../components/Toastr";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../../store/UserSlice";

const UpdatePassword = () => {

  const { user } = useAuth();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");

  const updatePassword = async () => {

    let model = {
      userId: user.UserId,
      currentPassword: currentPassword,
      newPassword: newPassword,
      newPasswordAgain: newPasswordAgain
    };

    console.log(model);

    const result = await UpdatePasswordService(model);

    console.log(result);

    if(result.statusCode === 200){
      ToastSuccess("Şifreniz başarıyla güncellendi!");
      dispatch(userLogout());
    } else {
      ToastError(result.error.errors[0]);
      clearStates();
    }

    setLoading(loading => false);
  }

  const clearStates = () => {
    setCurrentPassword(currentPassword => "");
    setNewPassword(newPassword => "");
    setNewPasswordAgain(newPasswordAgain => "");
  }

  const disabledControl = () => {
    if(currentPassword.length === 0 || newPassword.length === 0 || newPasswordAgain.length === 0){
      return true;
    }

    return false;
  }

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-xl">ŞİFRE GÜNCELLE</h3>
        </div>
      </div>
      <div>
        <div className="settingrightsizes">
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="current_password"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Şifre
            </label>
            <Input
              id="current_password"
              text="Şifre"
              placeholder="Güncel Şİfrenizi Girin"
              type="password"
              value={currentPassword}
              setState={setCurrentPassword}
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="new_password"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Yeni Şifre
            </label>
            <Input
              id="new_password"
              text="Yeni Şifre"
              placeholder="Yeni Şifrenizi Girin"
              type="password"
              value={newPassword}
              setState={setNewPassword}
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="new_password_conf"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Yeni Şifre Onayı
            </label>
            <Input
              id="new_password_conf"
              text="Yeni Şifre Onayı"
              placeholder="Yeni Şifrenizi Onaylayın"
              type="password"
              value={newPasswordAgain}
              setState={setNewPasswordAgain}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="Güncelle"
              classnames={`mt-5 UserSettingsButton ${disabledControl() ? 'opacity-70 cursor-not-allowed' : ''}`}
              loading={loading}
              action={() => {
                if(!disabledControl()){
                  setLoading(loading => true);
                  updatePassword();
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
