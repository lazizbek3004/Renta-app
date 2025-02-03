import React from 'react'
import logo from '../../images/logo_ligth.svg'
import book from '../../images/3d-book.svg'
import backgroundImage from '../../images/background.png'
import { Link } from 'react-router-dom'

const Welcome: React.FC = () => {
  return (
	<div className='w-full h-[100vh] flex flex-col px-4 sm:px-[40px] py-[30px] overflow-y-scroll specialOverflowY '
		style={{backgroundImage: `url(${backgroundImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'}}>
		{/* part 1 logo */}
		<div className='hidden md:flex'>
			<img className='w-[156px]' src={logo} alt="" />
		</div>

		{/* part 2 from book */}
		<div className='grow w-full h-auto flex justify-center items-center'>
			<div className='flex w-full flex-col gap-6 justify-center'>
				<img className='w-[140px] self-center' src={book} alt="" />
				<p className='text-[#1E2932] font-semibold text-[22px] leading-[26px] text-center'>Connect your wallet or create  <br className='hidden sm:flex' />
				a new one to continue</p>
				<div className='flex flex-col gap-3 justify-center items-center'>
					<Link to='/connect-wallet' className='w-full sm:w-[428px]'><button className='w-full sm:w-[428px] h-[60px] bg-[#1E2932] text-white rounded-[18px] cursor-pointer hover:bg-[#334350]'>Connect wallet</button></Link>
					<Link to='/import-wallet' className='w-full sm:w-[428px]'><button className='w-full sm:w-[428px] h-[60px] bg-[#1E2932] text-white rounded-[18px] cursor-pointer hover:bg-[#334350]'>Import wallet</button></Link>
				</div>
				<span className='w-full text-center'>or</span>
					<Link to='create-wallet' className='self-center w-full sm:w-[428px]'><button className='w-full sm:w-[428px] h-[60px] bg-[#fff] text-[#1E2932] rounded-[18px] cursor-pointer border-2 font-semibold  hover:bg-[#1E2932] hover:text-white self-center border-[#1E2932]'>+ Create wallet</button></Link>
			</div>

 
		</div>
	</div>
  )
}

export default Welcome