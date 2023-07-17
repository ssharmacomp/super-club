import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `poppins`,
    body: `poppins`,
    color: "#323232",
  },
  colors: {
  cta:{
    background: "#000",
      // ...
      color: "#1a202c",
  },
}
})

export default theme;