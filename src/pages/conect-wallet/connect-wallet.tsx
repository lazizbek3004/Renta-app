import React from "react";
import backgroundImg from '../../images/background.png'
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import coinbase from '../../images/coinbase.svg'
import metamask from '../../images/metamask.svg'
import trust from '../../images/trust.svg'
import safePal from '../../images/safePal.svg'
import rainbow from '../../images/rainbow.svg'
import bidget from '../../images/bidget.svg'
import { Settings } from "lucide-react";
import { ChevronRight } from "lucide-react";



const ConnectWallet: React.FC = () => {
	return <div className="w-full h-[100vh] flex justify-center relative" style={{backgroundImage: `URL(${backgroundImg})`,	backgroundRepeat: 'no-repeat',	backgroundSize: 'cover'}}>
		{/* part 1 desktop version */}
		<div className="absolute inset-0 backdrop-blur-md bg-black/30 hidden md:flex items-center justify-center specialOverflowY pt-20">
			<div className="w-[362px] h-[396px] bg-[#151313] rounded-[38px] flex flex-col gap-4 px-4 pt-8 overflow-y-hidden relative">
				<div className="w-full flex justify-end text-white">
					<Link to='/'><X className="text-white cursor-pointer w-[32px]" /></Link>
				</div>

				<div className="flex flex-col gap-3 grow h-full overflow-y-scroll mb-8 specialOverflow" >
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={coinbase} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">Coinbase</h2>
					</div>
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={metamask} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">Metamask</h2>
					</div>
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={trust} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">Trust</h2>
					</div>
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={safePal} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">SafePal</h2>
					</div>
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={rainbow} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">Rainbow</h2>
					</div>
					<div className="w-full px-2 py-2 bg-[#232222d1] rounded-md flex gap-4 items-center">
						<img src={bidget} className="w-10" alt="" />
						<h2 className="text-white text-[17px]">Bidget</h2>
					</div>

				</div>
			</div>
  		</div>
		{/* part 2 mobile version */}

		<div className="w-full h-auto bg-white flex md:hidden flex-col gap-10 px-4 py-6">
			<div className="w-full flex justify-start">
				<Link to='/'> <Settings className="text-gray-800 w-[30px] h-[30px]" /></Link>
			</div>

			<div className="w-full flex flex-col gap-4 justify-start items-start">
				<h2 className="text-[28px] leading-[32px] font-semibold mb-4">Connect Wallet</h2>

				<div className="w-full grid grid-cols-2 gap-2">
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={coinbase} alt="" />
						<h2 className="text-[18px] leading-[22px]">Coinbase</h2>
					</div>
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={metamask} alt="" />
						<h2 className="text-[18px] leading-[22px]">Metamask</h2>
					</div>
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={trust} alt="" />
						<h2 className="text-[18px] leading-[22px]">Trust</h2>
					</div>
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={safePal} alt="" />
						<h2 className="text-[18px] leading-[22px]">SafePal</h2>
					</div>
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={rainbow} alt="" />
						<h2 className="text-[18px] leading-[22px]">Rainbow</h2>
					</div>
					<div className="flex customShadow rounded-[18px] flex-col gap-2 justify-center items-center py-12">
						<img src={bidget} alt="" />
						<h2 className="text-[18px] leading-[22px]">Bidget</h2>
					</div>
					

				</div>

				<div className="w-full flex justify-between items-center px-4 py-6 customShadow rounded-[18px]">
					<h2 className="text-[22px] leading-[26px] font-semibold">All wallets</h2>
					<div className="flex gap-1 items-center">
						<h3 className="text-[22px] leading-[24px] text-gray-400">430+</h3>
						<h3> <ChevronRight className="text-gray-800 w-6 h-6" /></h3>
					</div>
				</div>
			</div>
		</div>

	</div>
}

export default ConnectWallet