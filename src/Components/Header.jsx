import { HStack } from "@chakra-ui/react";
import Logo from"../Images/logo.png";


const Header = () =>{
  return(
    <HStack className="header container" display={"block"}>
        <img src={Logo} alt="super club"/>
    </HStack>
  )
}
export default Header;