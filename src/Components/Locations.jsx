import locationBG from"../Images/locationBG.svg";
import Jaipur from"../Images/jaipur.png";
import Jodhpur from"../Images/jodhpur.png";
import Laknau from"../Images/laknau.png";
import Bikaner from"../Images/bikaner.png";
import Udaipur from"../Images/udaipur.png";
import Bhopal from"../Images/udaipur.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  HStack
} from "@chakra-ui/react";
const Locations = () =>{
  const renderSlides = () =>
  [{
    name: "Jaipur",
    imgUrl: Jaipur,
    linkUrl: "https://en.wikipedia.org/wiki/Jaipur",
  }, {
    name: "Bikaner",
    imgUrl: Bikaner,
    linkUrl: "https://en.wikipedia.org/wiki/Bikaner"
  },{
    name: "Jodhpur",
    imgUrl: Jodhpur,
    linkUrl: "https://en.wikipedia.org/wiki/Bikaner"
    },{
      name: "Laknau",
      imgUrl: Laknau,
      linkUrl: "https://en.wikipedia.org/wiki/Lucknow"
    },{
      name: "Udaipur",
      imgUrl: Udaipur,
      linkUrl: "https://en.wikipedia.org/wiki/Udaipur"
    }, {
        name: "Bhopal",
        imgUrl: Bhopal,
        linkUrl: "https://en.wikipedia.org/wiki/Bhopal"
    }].map(num => (
    <div key={num}>
      <img src={num.imgUrl}/>
        <Heading as={"h6"} className="location-title" my={"5px"}>
        {num.name}
        </Heading>
      <Link href={num.linkUrl} isExternal className="btn" background={"#fff"} color={"#323232"} borderRadius={100} p={"5px 10px"}>
      View retailers 
      </Link>
    </div>
  ));
  return(
    <Box 
    className="block-section locations"
    id="locations-section"
    color={"#fff"}
    flexDirection={"row"}
    >
    <Box className="circle circle-1">
      <Box className="circle circle-2"></Box>
      <Box className="circle circle-3"> </Box>
    </Box>
     <Box className="location-src" width={"100%"} pt={"40%"} position={"relative"} textAlign={"center"}>
     <Heading as="h1" className="heading" mb={2}>
        Rewards
     </Heading>
     <Text>
        from the favourite businesses in your city
     </Text>
     <HStack mx={"auto"} mt={"40px"} display={"block"} maxW={"650px"} className="carousel-wrap">
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        centerMode={true}
        centerPadding={"6px"}>
      {renderSlides()}
     </Slider>
     </HStack>
     </Box>
    </Box>
  )
}
export default Locations;