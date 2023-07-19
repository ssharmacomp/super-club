import FeaturesImg from"../Images/Features.svg";
import {
  Box,
  Heading,
  HStack,
  Text
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
        <Text>
      On every penny spent on . . .
      </Text>
      </Box>    
     
      <Box alignItems={"center"} display={"flex"} userSelect={"none"} className="feature-image">
        <img margin={"auto"} width={"auto"} src={FeaturesImg}/>
      </Box>   
    </HStack>
  )
}
export default Features;