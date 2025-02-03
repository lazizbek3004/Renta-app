import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import colorlessWallet from "../../images/colorlessWallet.svg";
import colorlessDao from "../../images/colorlessDao.svg";
import colorfulAirdrop from "../../images/colorfulAirdrop.svg";
import logo from "../../images/logo_ligth.svg";
import { Settings, Check, ChevronRight } from "lucide-react";
import leadingIcon from "../../images/leadingIcon.svg";
import coinIcon from '../../images/coinIcon.svg'
import downloadIcon from '../../images/download.svg'
import handIcon from '../../images/hand_vote.svg'


const Airdrop: React.FC = () => {
  const currentRoute = useLocation().pathname;

  const [clicked, setClicked] = useState(false);

    const [copied, setCopied] = useState(false);
  
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
	

  return (
    <div className="w-full h-[100svh] flex flex-col px-4 sm:px-10 py-[30px] justify-start items-center specialOverflowY">
      <div className="container lg:max-w-[1400px] flex flex-col gap-10">
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
          Airdrop
        </h1>

        <div className="w-full flex flex-col xl:flex-row justify-between xl:justify-center items-center xl:items-start gap-17">
          {/* part 1 */}
          <div className="md:w-[952px] w-full h-[846px] px-10 flex flex-col items-center relative bg-[url('/customBg.svg')] bg-cover bg-no-repeat bg-center ">
            <h3 className=" text-[16px] leading-[20px] text-[#798793]">
              {!clicked && <span>Lottery taps</span>}
              {clicked && <span>No gas to tap</span>}
            </h3>
            {!clicked && (
              <h2 className=" text-[44px] mb-10 leading-[54px] text-[#11ADB6] ">
                752
              </h2>
            )}
            {clicked && (
              <h3 className=" text-[16px] leading-[20px] mb-18 text-[#798793]">Balance too low</h3>
            )}

            <div className="h-[288.5px]">
              {!clicked && (
                <img
                  src="https://renta-frontend-three.vercel.app/images/airdrop-2.png"
                  className="w-[269.8px] cursor-pointer"
                  alt=""
                  onClick={() => setClicked(true)}
                />
              )}
              {clicked && (
                <img
                  src="https://renta-frontend-three.vercel.app/images/airdrop-1.png"
                  className="w-[269.8px] cursor-pointer"
                  alt=""
                  onClick={() => setClicked(false)}
                />
              )}
            </div>

			<div className="max-w-[472px] px-6 py-2 rounded-[14px] flex gap-3 items-center w-full lg:flex-row flex-col mt-12" style={{backgroundColor: 'rgba(15, 198, 209, 0.05)'}}>
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

			<div className="w-[512px] mt-10 py-5 px-10 grid grid-cols-3 justify-between rounded-[32px] items-center "  style={{backgroundColor: 'rgba(15, 198, 209, 0.05)'}}>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">Your rank</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">Beginner</h2>
				</div>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">Taps counter</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">10/10</h2>
				</div>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">You tapped</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">10 times</h2>
				</div>

			</div>

			<div className="w-[512px] mt-3 py-5 px-10 grid grid-cols-3 justify-between rounded-[32px] items-center "  style={{backgroundColor: 'rgba(15, 198, 209, 0.05)'}}>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">Tokens</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">20</h2>
				</div>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">RDAO points</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">50</h2>
				</div>
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[16px] leading-[20px] text-[#798793]">Timer</h2>
					<h2 className="text-[#1E2932] text-[18px] leading-[22px] ">2:48:47</h2>
				</div>

			</div>



          </div>

          {/* part 2 */}
          <div className="w-[340px] flex flex-col gap-15">
				<div className="flex flex-col gap-2 justify-start">
					<h2 className="text-[18px] leading-[22px] font-semibold text-[#1E2932] text-center xl:text-left ">Newbie?</h2>
					<p className="text-[16px] leading-[20px] text-[#1E2932] mb-5 ">Link your wallet address to the bot to start earning rewards. Join our Telegram bot and add your address under the settings section 
					to get your first RENTA token and start tapping into our web3!</p>
					<button className="w-full py-5 rounded-[18px] text-[18px] leading-[22px] font-semibold cursor-pointer hover:bg-[#1D2D38] hover:text-white " style={{border: "1px solid rgb(30, 41, 50)"}}>Join Telegram bot</button>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-[#798793] text-[16px] leading-[20px] text-center xl:text-left ">Operations</h2>
					<div className="flex flex-col gap-4 p-5 rounded-[32px]" style={{background: 'rgba(15, 198, 209, 0.05)'}}>
						<div className="flex gap-3">
							<img src={coinIcon} alt="" />
							<div className="grow flex justify-between">
								<h2 className="text-[18px] leading-[22px] font-semibold">Stake tokens</h2>
								<ChevronRight size={24} />
							</div>

						</div>
						<p className="text-[16px] leading-[20px]">Stake Renta tokens to earn interest and rewards. You can unstake at any time.</p>

					</div>
					<div className="flex flex-col gap-4 p-5 rounded-[32px]" style={{background: 'rgba(15, 198, 209, 0.05)'}}>
						<div className="flex gap-3">
							<img src={downloadIcon} alt="" />
							<div className="grow flex justify-between">
								<h2 className="text-[18px] leading-[22px] font-semibold">Claim RDAO tokens</h2>
								<ChevronRight size={24} />
							</div>

						</div>
						<p className="text-[16px] leading-[20px]">Claim RDAO tokens earned in Telegram bot to participate in Voting and Governance. RDAO tokens are equivalent to Telegram bot points after the snapshot.</p>

					</div>
					<div className="flex flex-col gap-4 p-5 rounded-[32px]" style={{background: 'rgba(15, 198, 209, 0.05)'}}>
						<div className="flex gap-3">
							<img src={handIcon} alt="" />
							<div className="grow flex justify-between">
								<h2 className="text-[18px] leading-[22px] font-semibold">Vote for proposal</h2>
								<ChevronRight size={24} />
							</div>

						</div>
						<p className="text-[16px] leading-[20px]">Cast your vote on the available proposals and earn rewards.</p>

					</div>


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
            <img src={colorfulAirdrop} alt="" />

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
            <img src={colorlessDao} alt="" />

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

export default Airdrop;
