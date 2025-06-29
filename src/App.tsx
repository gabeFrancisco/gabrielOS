import { useState } from 'react'
import './App.css'
import Desktop from './components/Desktop/Desktop'
import MainToolbar from './components/MainToolbar/MainToolbar'

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <main className='w-screen flex flex-col justify-between h-screen bg-blue-950'>
      <Desktop menu={menu}/>
      {/* <Warning/> */}
      <MainToolbar handleMenuBar={handleMenu}/>
    </main>
  )
}

export default App
