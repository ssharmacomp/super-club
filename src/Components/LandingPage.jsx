import homeImg from"../Images/Home-bg.jpg";
import {
  Box,
  Button,
  Heading,
  Text,
  HStack
} from "@chakra-ui/react";
const LandingPage = () =>{
  return(
    <Box className="block-section home" id="landing-section">
      <Box className="homepage-arc">
        <Box className="homepage-content container">
        <Text fontSize="md">
          Get 
          </Text>
          <Heading as="h1" className="heading">
            Super Club coins
          </Heading>
          <Heading as="h6" fontSize={"2xl"} mb={2}>
          every time you spend..
          </Heading>
          <Text fontSize="md">....be it fashion, grooming, food, leisure and  any more.</Text>
          <HStack marginTop={"20px"}>
          <Button colorScheme={"cta"} background={"#A8943D"} color={"#fff"} fontWeight={"300"} size={"lg"} borderRadius={"full"}>Join Super Club</Button>
          <Button background={"#ffffff"} color={"#323232"} fontWeight={"300"} size={"lg"} borderRadius={"full"}>
            Or <Text ml={"3px"} fontWeight={"400"}>Redeem</Text>
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}
export default LandingPage;