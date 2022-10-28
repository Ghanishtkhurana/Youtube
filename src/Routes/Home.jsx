import { Box, Container, Flex, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import data from "./hom.json";
import pfp from "./pfp.json"


function Home() {
  console.log("Home data ", data);
  const items = data.items;
  const icon = pfp.images

  return (
    <Box overflowX={"hidden"}>
        <Navbar />
        <SideBar/>
      <Box ml={20}>
      <SimpleGrid mt={10} columns={[1, 2, 3, 4]} gap={5} mr={2} ml={2}>
        {items.map((user, i) => {
          return (
            <Link to={`/video/${user.id.videoId}`}>
            <Box overflow={"hidden"}>
              <Box>
              <Image
                borderRadius={10}
                objectFit={"cover"}
                src={user.snippet.thumbnails.high.url}
                h={157}
                w={300}
              />
              </Box>
              <Box width={600}>
            <Text m={1} fontSize={"15px"} ml={1} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.title}
            </Text>
            <Flex >
            <Image
            src={icon[i].img}
            borderRadius={700}
            height={10}
            width={10}
          />   
            <Text p={2} fontSize={"13px"} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.channelTitle}
            </Text>
            </Flex>
            </Box>
            </Box>
          </Link>
          );
        })}
      </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
