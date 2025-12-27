import { useEffect, useState } from 'react'
import './App.css'
import Desktop from './components/Desktop/Desktop'
import MainToolbar from './components/MainToolbar/MainToolbar'
import Ami from './components/Boot/AMI'
import LoadingScreen from './components/Boot/LoadingScreen'

function App() {
  const [ami, setAmi] = useState(true)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAmi(false)
      setLoading(true)
    }, 3000)

    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])
  return (
    <main>
      {ami && <Ami />}
      {loading && <LoadingScreen/>}
      {!ami && !loading && (
        <div className='w-screen flex flex-col justify-between h-screen bg-blue-950'>
          <Desktop />
          {/* <Warning/> */}
          <MainToolbar />
        </div>
      )}
    </main>
  )
}

export default App
