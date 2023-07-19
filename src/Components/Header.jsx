import {useState,} from "react"; 
import { HStack } from "@chakra-ui/react";
import Logo from"../Images/logo.png";
import logoWhite from"../Images/logo-white.png";

const Header = () =>{
  var [curNavId, setCurNavId] = useState("landing-nav"); 
  var[logoSrc, setLogoSrc] = useState(Logo);
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    var activeNav = document.getElementById(curNavId);
    activeNav.classList.remove("active");
    var clickedNavID = `${anchor}-nav`;
    var clickedNav = document.getElementById(clickedNavID);
    activeNav.classList.remove("active");
    clickedNav.classList.add("active");
    setCurNavId(clickedNavID);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return(
    <HStack className="header container" display={"block"}>
        
        <img src={logoSrc} alt="super club"/>
        <nav className="scrolling-navigation">
            <HStack spacing={8} className="nav-wrap">
              <a id="landing-nav" href="#landing" onClick={handleClick("landing")} className="active link">Home</a>
              <a id="features-nav" href="#features" onClick={handleClick("features")} className="link">Projects</a>
              <a id="locations-nav" href="#locations" onClick={handleClick("locations")} className="link">Locations</a>
              <a id="contact-nav" href="#contact" onClick={handleClick("contact")} className="link">Contact</a>
            </HStack>
          </nav>
    </HStack>
    
  )
}
export default Header;