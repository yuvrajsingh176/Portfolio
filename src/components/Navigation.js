import image from '../images/favicon.jpg'
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
                <span className="text-[#64ffda] ">01.</span> About
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
            <a href="https://drive.google.com/file/d/1h86mNWcV6p3rqCMxb_iNKoKv1d2sDmFa/view?usp=sharing">
              <button className="text-[#13221e] mx-8 h-10  border border-[#64ffda] bg-white hover:bg-gray-400  font-semibold  rounded shadow-xl py-2 px-4">
                Resume
              </button>
            </a>
          </div>
        </nav>
}
export default Navigation;