import React, { useState } from "react";
import backgroundPic from "../../images/background.png";
import logo from "../../images/logo_ligth.svg";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

const ImportWallet: React.FC = () => {

	const [inputValue, setInputValue] = useState("")

	const navigate = useNavigate()

	const changeRoute = () => {
		if(inputValue.trim()){
			navigate('/')
		}
		
	}


  return (
    <div
      className="w-full h-[100vh] flex flex-col px-4 sm:px-[40px] py-[30px] "
      style={{
        backgroundImage: `url(${backgroundPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* part 1 */}
      <div className="hidden md:flex">
        <img className="w-[156px]" src={logo} alt="" />
      </div>

      {/* part 2 */}
      <div className="grow w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 justify-center items-start">
          <Link to="/">
            <div className="flex justify-center gap-4">
              <div>
                {" "}
                <Settings className="text-gray-800 w-6 h-6" />
              </div>
              <h2>Back</h2>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] leading-[28px] font-semibold mb-4">Import wallet</h2>
            <h2 className="text-[18px] leading-[22px] font-semibold mb-2">Please input your seed phrase to continue</h2>
            <h3>Seed phrase</h3>
			<input type="text" className="bg-[#F5F6F7] rounded-[12px] h-[68px] pl-2" value={inputValue} onChange={(e) => setInputValue(e.target.value) } />
			<button className={inputValue.trim() ? 'w-full sm:w-[428px] h-[60px] bg-[#1E2932] text-white rounded-[18px] cursor-pointer ' : 'w-full sm:w-[428px] h-[60px] bg-[#334350] text-white rounded-[18px]'} onClick={changeRoute}>Import</button>
          </div>
		  


        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
