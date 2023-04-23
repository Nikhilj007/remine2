import { BrowserRouter } from 'react-router-dom'
import {Navbar , Hero,Hero2 ,Achievements, Form, Footer} from './components';

const App=()=> {

  return (
    <div className='relative z-0 '>
      <div className="bg-white bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero2/>
        <Hero/>
        <Achievements/>
        <Form/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
