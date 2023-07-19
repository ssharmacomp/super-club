import {useState,} from "react"; 
import { HStack } from "@chakra-ui/react";
import Logo from"../Images/logo.png";


const Header = () =>{
  var [curNavId, setCurNavId] = useState("home"); 
  
  const handleClick = (anchor) => () => {
    console.log(curNavId);
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      
    }
      
  };

  return(
    <HStack className="header container" display={"block"}>
        <img src={Logo} alt="super club"/>
        <nav className="scrolling-navigation">
            <HStack spacing={8} className="nav-wrap">
              <a id="home" href="#landing" onClick={handleClick("landing")} className="active link">Home</a>
              <a id="prodFeatures" href="#features" onClick={handleClick("features")} className="link">Projects</a>
              <a id="ourLocations" href="#locations" onClick={handleClick("locations")} className="link">Locations</a>
              <a id="contactMe" href="#contact" onClick={handleClick("contact")} className="link">Contact</a>
            </HStack>
          </nav>
    </HStack>
    
  )
}
export default Header;