import { BrowserRouter } from 'react-router-dom'
import {Navbar , Hero} from './components';
import Form from './components/Form';
import Services from './components/Services';
import Achievements from './components/Achievements';

const App=()=> {

  return (
    <div className='relative z-0 '>
      <div className="bg-white bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        <Achievements/>
        <Services/>
        <Form/>
      </div>
    </div>
  )
}

export default App
