import { Box, Button } from "@chakra-ui/react"


const Title = () => {
  return (
    <Box  mt={5}>
      <Box color={"white"}  className="title_outer" bgGradient='linear(to-r, green.200, pink.500)'>
<div className="content_div">
<h2 className="title">Title</h2>
<div className="para">
<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequatur neque accusamus, eligendi maxime illum similique inventore non debitis et quae tempore error commodi odio magni rem asperiores ullam, atque natus praesentium numquam! Hic nemo error ab iusto.</p>
<Button >Read More</Button>
</div>

</div>
      </Box>
    </Box>
  )
}

export default Title
