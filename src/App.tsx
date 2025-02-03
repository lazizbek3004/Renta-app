import { Route, Routes } from "react-router-dom"
import Welcome from "./pages/welcome/welcome"
import ConnectWallet from "./pages/conect-wallet/connect-wallet"
import ImportWallet from "./pages/import-wallet/import-wallet"
import CreateWallet from "./pages/create-wallet/create-wallet"
import ConfirmWallet from "./pages/create-wallet/confirm-wallet"
import Wallet  from "./pages/wallet/wallet"
import Airdrop from "./pages/airdrop/airdrop"
import Dao from "./pages/dao/dao"


function App() {

  return (
   <>

    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="/import-wallet" element={<ImportWallet />} />
      <Route path="/create-wallet" element={<CreateWallet />} />
      <Route path="/confirm-wallet" element={<ConfirmWallet />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path="/airdrop" element={<Airdrop />} />
      <Route path="/dao" element={<Dao />} />
    </Routes>
   </>
  )
}

export default App
