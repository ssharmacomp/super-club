import FeaturesImg from"../Images/Features.svg";
import {
  Box,
  Heading,
  HStack
} from "@chakra-ui/react";
const Features = () =>{
  return(
    <HStack 
    className="block-section features"
    id="features-section"
    bgGradient='linear(white 0%, #EDEAEA)'
    flexDirection={"row"}
    >
      <Box margin={"auto"}>
      <Heading as="h1" className="heading" mb={2}>
        Get the<br/>best
        </Heading>
      </Box>    
      <Box alignItems={"center"} display={"flex"} userSelect={"none"}>
        <img margin={"auto"} width={"auto"} src={FeaturesImg}/>
      </Box>   
    </HStack>
  )
}
export default Features;