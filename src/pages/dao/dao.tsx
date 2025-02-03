import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo_ligth.svg";
import { Settings, Download } from "lucide-react";
import colorfulDao from "../../images/colorfulDao.svg";
import colorlessAirdrop from "../../images/ColorlessAirdrop.svg";
import colorlessWallet from "../../images/colorlessWallet.svg";
import bigLogo from "../../images/bigLogo.svg";

const Dao: React.FC = () => {
  const currentRoute = useLocation().pathname;

  return (
    <div className="w-full h-[100svh] flex flex-col px-4 sm:px-10 py-[30px] justify-start items-center">
      <div className="container lg:max-w-[1400px] flex flex-col gap-10 specialOverflow">
        <div className="container flex items-center gap-15 max-w-[1400px]">
          <div className="hidden lg:flex">
            <img className="w-[156px]" src={logo} alt="" />
          </div>

          <div className="flex grow justify-between items-center">
            <div>
              <nav className="hidden gap-10 lg:flex">
                <Link to="/wallet">
                  <h1
                    className={
                      currentRoute === "/wallet"
                        ? "text-[18px] leading-[22px] text-[#11ADB6] "
                        : "text-[18px] leading-[22px] text-[#1E2932] "
                    }
                  >
                    Wallet
                  </h1>
                </Link>
                <Link to="/airdrop">
                  <h1
                    className={
                      currentRoute === "/airdrop"
                        ? "text-[18px] leading-[22px] text-[#11ADB6] "
                        : "text-[18px] leading-[22px] text-[#1E2932] "
                    }
                  >
                    Airdrop
                  </h1>
                </Link>
                <Link to="/dao">
                  <h1
                    className={
                      currentRoute === "/dao"
                        ? "text-[18px] leading-[22px] text-[#11ADB6] "
                        : "text-[18px] leading-[22px] text-[#1E2932] "
                    }
                  >
                    DAO
                  </h1>
                </Link>
              </nav>
            </div>
            <div>
              <Link to="/">
                <Settings className="text-gray-800 w-[30px] h-[30px]" />
              </Link>
            </div>
          </div>
        </div>
        <h1 className="w-full text-left text-[60px] leading-[72px] font-semibold text-[#1E2932] ">
          DAO Voting
        </h1>
        <div className="flex w-full bg-[#F5F6F7] mt-10 p-5 rounded-[24px] items-center justify-start gap-4">
          <img src={bigLogo} alt="" />
          <p className="text-[16px] leading-[20px] text-[#1E2932] ">
            Participate in Renta DAO voting and governance, use RDAO tokens to
            vote on proposals and earn rewards.
          </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between">
          <div className="h-[250px] customShadow w-full xl:w-[380px] rounded-[32px] flex flex-col gap-7 justify-center items-center p-5 mb-4 xl:mb-0 ">
            <h1 className="text-[#1E2932] text-[22px] leading-[26px] font-semibold ">Active proposals</h1>
            <h2 className="text-center text-[#798793] text-[16px] leading-[20px]  ">
              There are no active proposals at the moment. Check back later.
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-11 xl:gap-4 items-start justify-end w-auto xl:w-full mb-32 lg:mb-10">
            <div className="w-full xl:w-[380px] flex flex-col gap-2 justify-center items-center">
              <h1 className="text-[22px] leading-[26px] text-[#1E2932] mb-5 font-semibold ">
                Claim RDAO tokens
              </h1>
              <div
                className="flex w-full rounded-[12px] items-center justify-between p-4 "
                style={{ backgroundColor: "rgba(15, 198, 209, 0.05)" }}
              >
                <h2 className="text-[#798793] text-[16px] leading-[20px]">
                  RDAO Balance
                </h2>
                <h2 className="text-[#1E2932] text-[16px] leading-[20px]">
                  50 RDAO
                </h2>
              </div>
              <div
                className="flex w-full rounded-[12px] items-center justify-between p-4 mb-4 "
                style={{ backgroundColor: "rgba(15, 198, 209, 0.05)" }}
              >
                <h2 className="text-[#798793] text-[16px] leading-[20px]">
                  Voting Power
                </h2>
                <h2 className="text-[#1E2932] text-[16px] leading-[20px]">
                  0 RDAO
                </h2>
              </div>
              <button className="w-full p-4 bg-[#1E2932] hover:bg-[#252f36] rounded-[18px] flex justify-center items-center gap-2 cursor-pointer ">
                <Download className="w-6 h-6 text-white" />
                <h2 className="text-[16px] leading-[20px] text-white font-semibold">
                  Claim
                </h2>
              </button>
            </div>
            <div className="w-full xl:w-[380px] flex flex-col gap-2 justify-center items-center">
              <h1 className="text-[22px] leading-[26px] text-[#1E2932] mb-5 font-semibold ">
                Rewards for votes
              </h1>
              <div
                className="flex w-full rounded-[12px] items-center justify-between p-4 mb-4 "
                style={{ backgroundColor: "rgba(15, 198, 209, 0.05)" }}
              >
                <h2 className="text-[#798793] text-[16px] leading-[20px]">
                  RDAO Balance
                </h2>
                <h2 className="text-[#1E2932] text-[16px] leading-[20px]">
                  0 RDAO
                </h2>
              </div>
              <button className="w-full p-4 bg-[#1E2932] hover:bg-[#252f36] rounded-[18px] flex justify-center items-center gap-2 cursor-pointer ">
                <Download className="w-6 h-6 text-white" />
                <h2 className="text-[16px] leading-[20px] text-white font-semibold">
                  Claim
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*mobile navbar  */}
      <div className="fixed container grid grid-cols-3  lg:hidden bg-white bottom-0  justify-center items-center pb-6 pt-6 ">
        <Link to="/wallet">
          <div className="flex flex-col items-center gap-1">
            <img src={colorlessWallet} alt="" />

            <h1
              className={
                currentRoute === "/wallet"
                  ? "text-[18px] leading-[22px] text-[#11ADB6] "
                  : "text-[18px] leading-[22px] text-[#798793] "
              }
            >
              Wallet
            </h1>
          </div>
        </Link>
        <Link to="/airdrop">
          <div className="flex flex-col items-center gap-1">
            <img src={colorlessAirdrop} alt="" />

            <h1
              className={
                currentRoute === "/airdrop"
                  ? "text-[18px] leading-[22px] text-[#11ADB6] "
                  : "text-[18px] leading-[22px] text-[#798793] "
              }
            >
              Airdrop
            </h1>
          </div>
        </Link>
        <Link to="/dao">
          <div className="flex flex-col items-center gap-1">
            <img src={colorfulDao} alt="" />

            <h1
              className={
                currentRoute === "/dao"
                  ? "text-[18px] leading-[22px] text-[#11ADB6] "
                  : "text-[18px] leading-[22px] text-[#798793] "
              }
            >
              DAO
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dao;
