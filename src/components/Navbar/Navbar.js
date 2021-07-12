import React,{Fragment,useState} from 'react';
import Logo from "../../Images/Logo/Orenda.png"

function Navbar() {
    const [menu, setMenu] = useState(false)
        return (
          <Fragment>
            <div>
            <nav className="flex flex-wrap bg-white lg:bg-white justify-between px-2  navbar-expand-lg">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full font-themefont  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a className="text-sm font-bold font-themefont leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap  text-yellow-700" href="orenda.com">
                    <img src={Logo} alt="Orenda" className="w-32 h-32"/>
                  </a>
                  <button className="text-yellow-700 cursor-pointer  leading-none px-3  border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none" type="button" onClick={()=>setMenu(!menu)}>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  </button>
                </div>
                <div className={`lg:flex flex-grow items-center ${menu?`flex`:`hidden`}` } id="example-navbar-danger">
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item">
                      <a className="px-4 py-1 flex items-center text-xl leading-snug hover:opacity-75" href="#What-we-do">
                        <span className="text-yellow-700 font-themefont">Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="px-4 py-1 flex items-center text-xl leading-snug hover:opacity-75" href="#What-we-do">
                        <span className="text-yellow-700 font-themefont">Projects</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="px-4 py-1 flex items-center text-xl leading-snug hover:opacity-75" href="#Whats-our-purpose">
                        <span className="text-yellow-700 font-themefont">Testimonials</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="px-4 py-1 flex items-center text-xl leading-snug  hover:opacity-75" href="#Who-we-are">
                        <span className="text-yellow-700 font-themefont">About Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
          </Fragment>
    )
}

export default Navbar
