import gabrielOS from '../../../public/gabrielOS.jpg'

function LoadingScreen() {
  return ( <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
    <img className='w-3/6' src={gabrielOS}/>
  </div> );
}

export default LoadingScreen;