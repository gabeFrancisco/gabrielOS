import './App.css'
import Desktop from './components/Desktop/Desktop'
import MainToolbar from './components/MainToolbar/MainToolbar'

function App() {
  return (
    <main className='w-screen flex flex-col justify-between h-screen bg-blue-950'>
      <Desktop/>
      {/* <Warning/> */}
      <MainToolbar/>
    </main>
  )
}

export default App
