import React from "react";
import backgroundImage from "../../images/background.png";
import logo from "../../images/logo_ligth.svg";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { useState } from "react";
import checkboxUn from "../../images/checkbox-unchecked.svg";
import checkboxDo from "../../images/checkbox-do.svg";
import { Lock, Frown } from "lucide-react";

const CreateWallet: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const changeRoute = () => {
    if (inputValue.trim() && checked) {
      navigate("/confirm-wallet");
    }
  };

  const [checked, setChecked] = useState(false);

  const checkValue = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  return (
    <div
      className="w-full h-[100vh] flex flex-col px-4 sm:px-[40px] py-[30px] overflow-y-scroll "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* part 1 */}
      <div className="hidden md:flex">
        <img className="w-[156px]" src={logo} alt="" />
      </div>

      {/* part 2 */}

      <div className="w-full md:h-full h-auto flex flex-col justify-center items-center ">
        <div className="flex md:flex-row flex-col gap-6 md:justify-end md:items-end justify-center items-center py-20">
          <div className="flex flex-col gap-8 justify-center items-start">
            <Link to="/">
              <div className="flex justify-center gap-4">
                <div>
                  <Settings className="text-gray-800 w-6 h-6" />
                </div>
                <h2>Back</h2>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] leading-[28px] font-semibold mb-4">
                Confirm seed phase
              </h2>
              <h2 className="text-[18px] leading-[22px] font-semibold mb-2">
                Please confirm your seed phrase to continue
              </h2>
              <h3>Seed phrase</h3>
              <input
                type="text"
                className="bg-[#F5F6F7] rounded-[12px] h-[68px] pl-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <div className="w-full sm:w-[428px] flex gap-2 justify-start my-2">
                <div>
                  {!checked && (
                    <img
                      src={checkboxUn}
                      onClick={() => setChecked(true)}
                      className="w-8 cursor-pointer h-8"
                      alt=""
                    />
                  )}
                  {checked && (
                    <img
                      src={checkboxDo}
                      onClick={() => setChecked(false)}
                      className="w-8 cursor-pointer h-8"
                      alt=""
                    />
                  )}
                </div>

                <p
                  className="text-[14px] leading-[18px] text-[#798793] cursor-pointer "
                  onClick={() => checkValue()}
                >
                  By using this wallet, I acknowledge and accept these
                  responsibilities. I always prioritize the security of my
                  digital assets.
                </p>
              </div>

              <button
                className={
                  inputValue.trim() && checked
                    ? "w-full sm:w-[428px] h-[60px] bg-[#1E2932] text-white rounded-[18px] cursor-pointer "
                    : "w-full sm:w-[428px] h-[60px] bg-[#334350] text-white rounded-[18px]"
                }
                onClick={changeRoute}
              >
                Import
              </button>
            </div>
          </div>

          <div className="md:max-w-[380px] w-full md:border-l-[1px] border-[#79879333] border-l-0 pl-10 flex flex-col">
            <div className="py-5">
              <p className="text-[#1E2932] font-semibold text-[22px] leading-[26px] ">
                Warning: non-custodial wallet security notice
              </p>
            </div>
            <div className="flex flex-col">
              <div className="p-2 flex justify-start gap-3">
                <Lock size={34} className="text-black" />
                <div className="flex flex-col justify-start items-start gap-2 pt-1">
                  <h2 className="text-[18px] leading-[22px] font-semibold text-[#1E2932] ">
                    Secure your seed phrase
                  </h2>
                  <p className="text-[#798793] text-[16px] leading-[20px]  ">
                    Your seed phrase is the key to your wallet. Store it in a
                    secure and private location. <br />
                    Do not share it with anyone.
                  </p>
                </div>
              </div>
              <div className="p-2 flex justify-start gap-3">
                <Frown size={52} className="text-black" />
                <div className="flex flex-col justify-start items-start gap-2 pt-3">
                  <h2 className="text-[18px] leading-[22px] font-semibold text-[#1E2932] ">
                    Loss of Access
                  </h2>
                  <p className="text-[#798793] text-[16px] leading-[20px]  ">
                    If you lose your seed phrase, you will permanently lose
                    access to your wallet and funds. There is no recovery option
                    without it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWallet;
