
import { BsFillMoonStarsFill } from "react-icons/bs";



const NavBar=()=>{

  return (
    <>
    
          <nav className="py-10 mb-12 flex justify-between mx-10">
            <h1 className="text-xl ">Developed By Sahar</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 ml-8" href="https://www.linkedin.com/in/sahar-behbahani/">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
     
    </>
  );
}
export default NavBar;
