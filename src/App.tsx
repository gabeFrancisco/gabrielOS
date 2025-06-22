import './App.css'
import Desktop from './components/Desktop/Desktop'
import MainToolbar from './components/MainToolbar'

function App() {

  return (
    <main className='w-screen flex flex-col justify-between h-screen bg-teal-800'>
      <Desktop />
      <MainToolbar />
    </main>
  )
}

export default App
