import React from "react";
import { Button, Input } from "../../../../components";

const ResetPassword = () => {
  return (
    <>
      <div className="border-b border-t border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-xl">ŞİFRE SIFIRLA</h3>
        </div>
      </div>
      <div>
        <div className="settingrightsizes">
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="passreset"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              E-Posta
            </label>
            <Input
              id="passreset"
              text="E-Posta"
              placeholder="E-postanızı Girin"
              type="email"
              // setState={setEmail}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="Sıfırla"
              classnames="mt-5 UserSettingsButton"
              // action={() => setLoading(loading => true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
