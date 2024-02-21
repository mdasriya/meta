import { useState } from "react";
import data from "../data";
import { Box, Button, Heading } from "@chakra-ui/react";

const Product = () => {
const [all, setAll] = useState(false)
    const handleDetails = () => {
        setAll((prev)=> !prev)
    }

  return (
    <div className="outer_product">
      <div className="content_div">
        <div className="title_product">
<h1 className="title">Classes</h1>

        </div>
<div className="para">
   
<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequatur neque accusamus.</p>

</div>

</div>
     
      <div className="grid_div">
        {data &&
          data.map((product, index) => {
            return (
              <div className="individual" key={product.ID}>
                <img
                  width={"100%"}
                  height={"100px"}
                  src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt=""
                />
              <Box mt={2} className="after_image" p={2}>

             
                <Heading size={"20px"}>{product.Name}</Heading>
                <p className="des">{product.ShortDesc.slice(0,200)}...</p>
                <Button onClick={handleDetails}>View Details</Button>
                </Box>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
