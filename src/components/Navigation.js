import image from '../images/favicon.jpg'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return <nav className="flex justify-between">
          <img
            className="h-20 w-20 rounded-xl border-[2px] border-[#64ffda] "
            src={image}
            alt="logo"
          />
          <div className="flex items-center">
            <ul className="flex flex-row space-x-4 ">
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
            <Link to="#about" smooth>
            <span className="text-[#64ffda] ">01.</span> About
              
            </Link>        
            
        
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
                <span className="text-[#64ffda] ">02.</span> Experience
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
                <span className="text-[#64ffda] ">03.</span> Work
              </li>
              <li className="text-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300 ...">
                <span className="text-[#64ffda] ">04.</span> Contact
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/127kOV27E1wnQtByyWiKG6O9lKvqN30r0/view?usp=sharing">
              <button className="text-[#13221e] mx-8 h-10  border border-[#64ffda] bg-white hover:bg-gray-400  font-semibold  rounded shadow-xl py-2 px-4">
                Resume
              </button>
            </a>
          </div>
        </nav>
}
export default Navigation;