// import React, { useEffect, useState } from "react";
// import "./NavBar.css";
// import { useCursorContext } from "../../components/cursor/CursorContext";

// const NavBar = () => {
//   const [sticky, setSticky] = useState(false);
//   const { textEnter, textLeave } = useCursorContext();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//     console.log("Ok")
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
    
//     <nav className={sticky ? "sticky" : ""}>
//       <div className="nav-content">
//         <div className="logo">
//         <img className='navbar-logo'src='/assets/images/about_images/logo.png' alt='Ssrp-logo'></img>
//         <img className='navbar-logo'src='/assets/images/Trust_logo/somaiya white.png' alt='Somaiya_Vidyavihar'></img>
//         <img className='navbar-logo'src='/assets/images/Trust_logo/somaiya trust.png' alt='Somaiya_Vidyavihar_University'></img>
//         </div>
//         <div className="toggle-button" onClick={toggle}>≡</div>
//         {
//           isOpen && (
//             <div className="nav-links">
//               <ul>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/">
//                       Home
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/project">
//                       Projects
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/community">
//                       Community
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/events">
//                       Events
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/crowdfunding">
//                       Crowd-Funding
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                   <div className="navigation">
//                     <a className="nav-link active" aria-current="page" href="/contact">
//                       Contact US
//                     </a>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           )
//         }
//         <ul className="nav-links">
//         <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                    <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/">Home</a>
//                    </div>
//                  </li>
//                  <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                  <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/project">Projects</a>
//                  </div>
//                  </li>
//                  <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                  <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/community">Community</a>
//                  </div>
//                  </li>
//                  <li className="nav-item target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                  <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/events">Events</a>
//                  </div>
//                  </li>
//                  <li className="nav-item target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                  <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/crowdfunding">Crowd-Funding</a>
//                  </div>
//                  </li>
//                  <li className="nav-item target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
//                  <div className="navigation">
//                    <a className="nav-link active" aria-current="page" href="/contact">Contact US</a>
//                  </div>
//                  </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useCursorContext } from "../../components/cursor/CursorContext";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const { textEnter, textLeave } = useCursorContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Ok")
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={sticky ? "sticky" : ""}>
      <div className="nav-content">
        <div className="logo">
          <img className='navbar-logo' src='/assets/images/about_images/logo.png' alt='Ssrp-logo'></img>
          <img className='navbar-logo' src='/assets/images/Trust_logo/somaiya white.png' alt='Somaiya_Vidyavihar'></img>
          <img className='navbar-logo' src='/assets/images/Trust_logo/somaiya trust.png' alt='Somaiya_Vidyavihar_University'></img>
        </div>
        <div className="toggle-button" onClick={toggle}>≡</div>
        {
          isOpen && (
            <div className="nav-links mobile">
              <ul>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </div>
                </li>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/project">
                      Projects
                    </a>
                  </div>
                </li>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/community">
                      Community
                    </a>
                  </div>
                </li>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/events">
                      Events
                    </a>
                  </div>
                </li>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/crowdfunding">
                      Crowd-Funding
                    </a>
                  </div>
                </li>
                <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                    <a className="nav-link active" aria-current="page" href="/contact">
                      Contact US
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )
        }
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </div>
          </li>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/project">Projects</a>
            </div>
          </li>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/community">Community</a>
            </div>
          </li>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/events">Events</a>
            </div>
          </li>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/crowdfunding">Crowd-Funding</a>
            </div>
          </li>
          <li className="nav-item target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="navigation">
              <a className="nav-link active" aria-current="page" href="/contact">Contact US</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
