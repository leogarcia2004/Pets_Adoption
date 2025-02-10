import { Link } from "react-router-dom";
import logo from "../public/images/header/icone_cachorro-gato.png";
import { useNavigate } from "react-router-dom";
import { useWidthContext } from "../context/WidthContext";

const Header = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
  const { windowWidth, handleNavBar, navBarOpen } = useWidthContext();

  return (
    (
      windowWidth > 1024 ? 
      <header className="bg-[#F5F5F5] flex flex-wrap gap-14 justify-center md:items-center border-b-2 border-black lg:px-36 px-4 py-6">
        <nav className="flex gap-8 items-center font-semibold">
            <img className="cursor-pointer" onClick={handleNavigate} src={logo} alt="Ícone cachorro e gato" />
            <ul className="flex gap-8 font-bold">
                <li >
                  Rescue сenter       
                </li>
                <li >
                  <Link to="/adoptables">Adoptables</Link>                
                </li>
                <li >
                  Apply to adopt
                </li>
                <li >
                  Ways to give
                </li>
                <li >
                  Events
                </li>
            </ul>
        </nav>
        <div className="flex gap-6">
            <div className="flex gap-3 items-center font-semibold">
                <i className="fa fa-phone text-xl"></i>
                631-249-7325
            </div>
            <button className="rounded-3xl bg-pink-600 py-3 px-4 flex items-center font-bold text-white">
                <i className="fa fa-heart mr-2 text-xl"></i>
                Donate
            </button>
        </div>
      </header>
      : 
      <header className="flex flex-wrap gap-14 justify-center md:items-center py-6 border-b-2 border-black">
          <div className="flex justify-between items-center w-full">
            <img className="cursor-pointer ml-4" onClick={handleNavigate} src={logo} alt="Ícone cachorro e gato" />
            <div className="flex gap-6">
              <div className="flex gap-3 items-center font-semibold">
                  <i className="fa fa-phone text-xl"></i>
                  631-249-7325
              </div>
            </div>
            <i
              onClick={handleNavBar}
              className="fas fa-bars text-black text-2xl cursor-pointer mr-4"
            ></i>
          </div>
          {navBarOpen && (
            <nav className="fixed top-0 w-full h-screen flex flex-col items-center justify-center backdrop-blur-md bg-black/30">
              <i
                onClick={handleNavBar}
                className="fas fa-times absolute top-3 left-3 text-white opacity-50 cursor-pointer "
              ></i>
              <i className="fas fa-dog text-2xl"></i>
              <ul className="flex flex-col items-center gap-10 text-black text-2xl mt-6">
                
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                    RESCUE CENTER
                </li>
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                  <Link to="/adoptables" onClick={handleNavBar}>
                    ADOPTABLES
                  </Link>
                </li>
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                    APPLY TO ADOPT
                </li>
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                    WAYS TO GIVE
                </li>
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                    EVENTS
                </li>
                <li
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                    DONATE
                </li>
              </ul>
            </nav>
          )}
      </header>
    )
    
  )
}

export default Header