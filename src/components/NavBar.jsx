
import { Box, Button, Heading, Text } from "@chakra-ui/react"
import "../App.css"

const NavBar = () => {
  return (
    <Box  className='outer_div'  bg={"white"} top={0} width={"100%"} shadow={"lg"}>
     <Heading className="left">Title</Heading> 
     <Box className="right" textAlign={"center"} justifyContent={"center"}>
        <ul>
            <Text>Home</Text>
            <Text>about</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
            <Button >Button</Button>
        </ul>
        </Box> 
    </Box>
  )
}

export default NavBar
