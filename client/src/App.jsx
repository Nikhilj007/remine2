import { BrowserRouter } from 'react-router-dom'
import {Navbar , Hero} from './components';

const App=()=> {

  return (
    <div className='relative z-0 bg-black'>
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App
