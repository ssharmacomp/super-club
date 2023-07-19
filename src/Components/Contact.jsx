import ContactImg from"../Images/contact-icon.svg";
import CityScap from"../Images/cityscape.svg";
import {
  Box,
  Heading,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
const Contact = () =>{
  return(
    <HStack 
    className="block-section contact"
    id="contact-section"
    bgGradient='linear(white 0%, #EDEAEA)'
    flexDirection={"row"}
    >
      <HStack textAlign={"center"} display={"block"} pt={"80px"} className="contact-image" position={"relative"} zIndex={"1"}>
        <img src={ContactImg}/>
      </HStack>
      <HStack position={"relative"} display={"block"} textAlign={"center"} zIndex={"1"}>
        <Heading as="h2" className="heading" mb={2}>
            Want to start ?
        </Heading>
        <Text pb={"15px"}>
        Journey of earning?
        </Text>
        <Link href="#" className="btn-primary" >
          Join Super Club
        </Link>
      </HStack>
      <HStack className="city-scap"></HStack>
    </HStack>
  )
}
export default Contact;