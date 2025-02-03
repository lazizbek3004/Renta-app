import React, { useState } from "react";
import logo from "../../images/logo_ligth.svg";
import { Link, useLocation } from "react-router-dom";
import { Settings, Check } from "lucide-react";
import litleLog from "../../images/littleLog.svg";
import leadingIcon from "../../images/leadingIcon.svg";
import sendLogo from "../../images/sendLogo.svg";
import plusLogo from "../../images/plusLogo.svg";
import stakeLogo from "../../images/stakeLogo.svg";
import swapLogo from "../../images/swapLogo.svg";
import walletIcon from "../../images/walletIcon.svg";
import colorlessAirdrop from "../../images/ColorlessAirdrop.svg";
import colorlessDao from "../../images/colorlessDao.svg";

const Wallet: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [info, setInfo] = useState("tokens");

  const setChecked = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        "0x947bEe160fF55d33185D6feA023BF6A889ce2680"
      );
      alert("Copied!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const currentRoute = useLocation().pathname;

  return (
    <div className="w-full h-[100svh] flex flex-col px-4 sm:px-10 py-[30px] justify-start items-center">
      <div className="w-full lg:container lg:max-w-[1400px] flex flex-col gap-10">
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
        <h1 className="w-full text-center text-[60px] leading-[72px] font-semibold text-[#1E2932] ">
          Wallet
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-18 justify-start items-start">
          {/* for part 1 */}
          <div className="w-full lg:w-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2 p-5 justify-center bg-[#F9FAFB] rounded-[32px] items-center ">
              <div className="flex gap-3 items-center">
                <h1 className="text-[44px] leading-[54px] text-[#1E2932] ">
                  19.999440
                </h1>
                <img src={litleLog} alt="" />
              </div>
              <div className="bg-white px-6 py-2 rounded-[14px] flex gap-3 items-center w-full lg:flex-row flex-col">
                {!copied && (
                  <img
                    src={leadingIcon}
                    className="cursor-pointer"
                    onClick={() => {
                      setChecked();
                      copyToClipboard();
                    }}
                    alt=""
                  />
                )}
                {copied && (
                  <Check className="w-6 h-6 text-[#00F0FF] cursor-pointer" />
                )}
                <p className="w-full text-[16px] leading-[20px] text-[#00F0FF] text-center break-all">
                  0x947bEe160fF55d33185D6feA023BF6A889ce2680
                </p>
              </div>
              <div className="w-full bg-white px-6 py-2 mt-7 rounded-[14px] flex justify-between items-center ">
                <h2 className="tex-[16px] leading-[20px] text-[#798793]">
                  Staked:
                </h2>
                <h3 className="text-[#1E2932]">0.0 RENTA</h3>
              </div>
              <div className="w-full bg-white px-6 py-2 rounded-[14px] flex justify-between items-center ">
                <h2 className="tex-[16px] leading-[20px] text-[#798793]">
                  Staked:
                </h2>
                <h3 className="text-[#1E2932]">0.0 RENTA</h3>
              </div>
            </div>
            <div className=" w-full py-5 grid grid-cols-4 bg-[#F9FAFB] rounded-[32px] justify-center items-center ">
              <div className="flex flex-col gap-2 items-center">
                <img src={sendLogo} className="cursor-pointer" alt="" />
                <h2>Send</h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={plusLogo} className="cursor-pointer" alt="" />
                <h2>Recieve</h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={stakeLogo} className="cursor-pointer" alt="" />
                <h2>Stake</h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={swapLogo} className="cursor-pointer" alt="" />
                <h2>Swap</h2>
              </div>
            </div>
          </div>

          {/* for part 2 */}
          <div className="w-full lg:w-auto grow flex flex-col mb-30 lg:mb-0">
            <div className="w-full bg-[#F9FAFB] p-1 grid grid-cols-3 ">
              <div
                className={
                  info === "tokens"
                    ? "bg-white text-center text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                    : "bg-[#F9FAFB] text-center text-[#798793] text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                }
                onClick={() => setInfo("tokens")}
              >
                Tokens
              </div>
              <div
                className={
                  info === "nft"
                    ? "bg-white text-center text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                    : "bg-[#F9FAFB] text-center text-[#798793] text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                }
                onClick={() => setInfo("nft")}
              >
                NFT's
              </div>
              <div
                className={
                  info === "activity"
                    ? "bg-white text-center text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                    : "bg-[#F9FAFB] text-center text-[#798793] text-[16px] leading-[20px] rounded-[10px] p-1 cursor-pointer "
                }
                onClick={() => setInfo("activity")}
              >
                Activity
              </div>
            </div>

            <div className="w-full">
              {info === "tokens" && (
                <div className="flex flex-col gap-4 w-full pt-8">
                  <div className="w-full flex justify-between px-1 py-5 border-b-[1px] border-[#798793] ">
                    <div className="flex gap-4 items-center">
                      <div className="p-1 bg-black rounded-[50%]">
                        <img src={litleLog} alt="" />
                      </div>
                      <h2 className="text-[16px] leading-[20px] text-[#798793] ">
                        Renta Token
                      </h2>
                    </div>
                    <h2>20.0 RENTA</h2>
                  </div>
                  <div className="w-full flex justify-between px-1 py-5 border-b-[1px] border-[#798793] ">
                    <div className="flex gap-4 items-center">
                      <div className="p-1 bg-black rounded-[50%]">
                        <img src={litleLog} alt="" />
                      </div>
                      <h2 className="text-[16px] leading-[20px] text-[#798793] ">
                        Renta DAO
                      </h2>
                    </div>
                    <h2>50.0 RDAO</h2>
                  </div>
                </div>
              )}
              {info === "nft" && (
                <div className="w-full py-20 text-center">
                  <h2 className="text-[16px] leading-[20px] text-[#798793]">
                    There are no NFT’s in your wallet yet
                  </h2>
                </div>
              )}
              {info === "activity" && (
                <div className="w-full py-20 text-center">
                  <h2 className="text-[16px] leading-[20px] text-[#798793]">
                    No transactions yet
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*mobile navbar  */}
      <div className="fixed container grid grid-cols-3  lg:hidden bg-white bottom-0  justify-center items-center pb-6 pt-6 ">
        <div className="flex flex-col items-center gap-1">
          <img src={walletIcon} alt="" />
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
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={colorlessAirdrop} alt="" />
          <Link to="/airdrop">
            <h1
              className={
                currentRoute === "/airdrop"
                  ? "text-[18px] leading-[22px] text-[#11ADB6] "
                  : "text-[18px] leading-[22px] text-[#798793] "
              }
            >
              Airdrop
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={colorlessDao} alt="" />
          <Link to="/dao">
            <h1
              className={
                currentRoute === "/dao"
                  ? "text-[18px] leading-[22px] text-[#11ADB6] "
                  : "text-[18px] leading-[22px] text-[#798793] "
              }
            >
              DAO
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
