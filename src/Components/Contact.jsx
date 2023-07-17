import ContactImg from"../Images/contact-icon.svg";
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
      <HStack textAlign={"center"} display={"block"} pt={"80px"} className="contact-image">
        <img src={ContactImg}/>
      </HStack>
      <Heading as="h2" className="heading" mb={2}>
          Want to start ?
      </Heading>
      <Text>
      Journey of earning?
      </Text>
      <Link href="#" className="btn-primary" >
      Join Super Club
      </Link>
    </HStack>
  )
}
export default Contact;