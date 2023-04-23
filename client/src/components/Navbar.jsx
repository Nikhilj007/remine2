import { logo} from "../assets";
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef } from "react"; 

const Navbar = () => {
  const navRef = useRef();

  const show = ()=>{
    navRef.current.classList.toggle("hidden");

  }
  return (
    <div className=" bg-abc flex p-5 justify-between items-center fixed top-0 w-full z-50 h-24 opacity-100">
      <img width={"80px"} src={logo} alt="" />
      <div className="flex gap-5 max-sm:hidden float-right">
        <div className="text-green text-xl font-bold">Home</div>
        <div className="text-green text-xl font-bold">About</div>
        <div className="text-green text-xl font-bold">Services</div>
        <div className="text-green text-xl font-bold">Contacts</div>
      </div>
      <div className="flex gap-5 mr-8 max-sm:hidden">
        <FaFacebookSquare className="text-green text-2xl" />
        <FaInstagramSquare className="text-green text-2xl" />
        <FaYoutubeSquare className="text-green text-2xl" />
      </div>
      <div onClick={show} className="Flex hover:cursor-pointer">
        <GiHamburgerMenu  className="sm:hidden text-green text-2xl" />
      </div>
      <div ref={navRef} className="flex flex-col gap-5 hidden mt-20">
      <div className="text-green text-xl font-bold">Home</div>
        <div className="text-green text-xl font-bold">About</div>
        <div className="text-green text-xl font-bold">Services</div>
        <div className="text-green text-xl font-bold">Contacts</div>
      </div>
    </div>
  )
}

export default Navbar
