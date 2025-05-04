import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { GambaUi } from 'gamba-react-ui-v2'
import { useTransactionError } from 'gamba-react-v2'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Modal } from './components/Modal'
import { TOS_HTML, ENABLE_TROLLBOX } from './constants'
import { StyledSection } from './components/Slider'
import { useToast } from './hooks/useToast'
import { useUserStore } from './hooks/useUserStore'
import Dashboard from './sections/Dashboard/Dashboard'
import Game from './sections/Game/Game'
import Header from './sections/Header'
import RecentPlays from './sections/RecentPlays/RecentPlays'
import Toasts from './sections/Toasts'
import Footer from './sections/Footer'
import TrollBox from './components/TrollBox'


function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function ErrorHandler() {
  const walletModal = useWalletModal()
  const toast = useToast()
  const [error, setError] = React.useState<Error>()

  useTransactionError(
    (error) => {
      if (error.message === 'NOT_CONNECTED') {
        walletModal.setVisible(true)
        return
      }
      toast({ title: '❌ Transaction error', description: error?.error?.errorMessage ?? error.message })
    },
  )

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  return (
    <>
      <div className="bg-background-image h-screen overflow-auto">
        <ScrollToTop />
        <ErrorHandler />
        <Header />
        <Toasts />
        <StyledSection>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:gameId" element={<Game />} />
          </Routes>
          <h2 style={{ textAlign: 'center' }}>Recent Plays</h2>
          <RecentPlays />
        </StyledSection>
        {ENABLE_TROLLBOX && <TrollBox />}
      </div> 
    </>
  )
}
