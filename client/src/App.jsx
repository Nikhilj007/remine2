import { BrowserRouter } from 'react-router-dom'
import {Navbar , Hero} from './components';
import Form from './components/Form';

const App=()=> {

  return (
    <div className='relative z-0 '>
      <div className="bg-white bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        <Form/>
      </div>
    </div>
  )
}

export default App
