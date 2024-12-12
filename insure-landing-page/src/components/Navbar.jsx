import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
 

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }
     

  return (
    <nav>
        <div className="flex items-center justify-between px-4 py-4">
            <div>
                <h1 className="text-3xl font-bold font-sans">INSURE</h1>
            </div>
            {/* desktop and tablet view */}
            <div>
                <ul>
                    <li>HOW WE WORK</li>
                    <li>BLOG</li>
                    <li>ACCOUNT</li>
                    <li></li>
                </ul>
            </div>
            {/* mobile view */}
            <div onClick={toggleMenu} className="sm:hidden ">
                {/* hamburger menu */}
                {menu ? <IoClose size={30}/> :  <HiMenu size={30} />}
                <div className="left-0 w-full h-screen absolute pt-4 ">
                    {menu ? (
                        <ul className="flex flex-col items-center font-semibold text-lg gap-6 ">
                            <li>HOW WE WORK</li>
                            <li>BLOG</li>
                            <li>ACCOUNT</li>
                            <button className="border-2 border-black rounded px-20 py-2">VIEW PLANS</button>
                            <img className="bottom-0 left-0 right-0 absolute " src="src/assets/images/bg-pattern-mobile-nav.svg" alt="" />
                        </ul>
                    ) : null}
                   
                </div>
           
            </div>

        </div>
    </nav>
  )
}

export default Navbar