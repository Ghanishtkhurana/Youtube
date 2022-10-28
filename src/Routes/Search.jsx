import { Box, Container, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { cartContext } from "../Context/AuthContext"
import data from "./db.json";
import pfp from "./pfp.json"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import SideBar from "../Components/Sidebar";

function Search() {
  const {cart,setCart} = useContext(cartContext)
  console.log("data=>", data);
  console.log("cart",cart)
  const icon = pfp.images
  console.log(icon[0].img)
  const items = data.items
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <Stack m={10} alignItems={"center"} >
      {cart.map((user, i) => {
        return (
          <Link to={`/video/${user.id.videoId}`}>
          <Flex key={i} >
            <Box mr={5}>
              <Image
                borderRadius={10}
                objectFit={"cover"}
                src={user.snippet.thumbnails.high.url}
                h={168}
                w={300}
              />
            </Box>
            <Box width={600}>
            <Text p={3} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.title}
            </Text>
            <Flex ml={5} >
            <Image
            mt={2}
            src={icon[i].img}
            borderRadius={700}
            height={10}
            width={10}
          />   
            <Text p={3} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.channelTitle}
            </Text>
            </Flex>
            </Box>
            {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
          </Flex>
          </Link>
        );
      })}
      </Stack>
    </div>
  );
}

export default Search;
