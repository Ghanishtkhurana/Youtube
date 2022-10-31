import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import { cartContext } from "../Context/AuthContext";
import pfp from "./pfp.json";


const Trending = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=24&key=AIzaSyBqRSgqiC4exIS1hzBXVkRuZx-TjV8xOpU"
  );

  const data = await res.json();
  return data;
};

function Video() {
  const param = useParams();
  const id = param.id;
  console.log(id);
  const icon = pfp.images;
  const { cart, setCart } = useContext(cartContext);
  console.log(cart)

  const [data, setData] = useState([]);

  useEffect(() => {
    handleTheTrending();
  }, []);

  const handleTheTrending = async () => {
    const append = await Trending();
    setData(append.items);
  };

  useEffect(() => {
    // handleTheData(id)
  }, []);
  // const handleTheData = async(id)=>{
  //   const append = await getImage(id)
  //   setData(append)
  // }
  return (
    <Box>
      <Navbar />
      <Flex>
        <Box ml={10} mt={5}>
          {/* <Image src={data.Poster} /> */}
          <iframe
            width="760"
            height="430"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            allowFullScreen={true}
          ></iframe>
        </Box>
        <Box mt={5}>
          {cart.map((user, i) => {
            return (
              <Link to={`/video/${user.id.videoId}`}>
                <Flex key={i}>
                  <Box mr={2} mb={4} ml={4}>
                    <Image
                      borderRadius={10}
                      objectFit={"cover"}
                      src={user.snippet.thumbnails.high.url}
                      h={100}
                      w={200}
                    />
                  </Box>
                  <Box width={300}>
                    <Text
                      fontSize={"13px"}
                      p={1}
                      color={"white"}
                      alignItems={"left"}
                      textAlign={"left"}
                    >
                      {user.snippet.title}
                    </Text>
                    <Flex ml={5}>
                      <Image
                        mt={2}
                        src={icon[i].img}
                        borderRadius={700}
                        height={10}
                        width={10}
                      />
                      <Text
                        p={3}
                        color={"white"}
                        alignItems={"left"}
                        textAlign={"left"}
                      >
                        {user.snippet.channelTitle}
                      </Text>
                    </Flex>
                  </Box>
                  {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
                </Flex>
              </Link>
            );
          })}
        </Box>

        {
          cart.length === 0 && <Box mt={5}>
          {data.map((user, i) => {
            return (
              <Link to={`/video/${user.id}`}>
                <Flex key={i}>
                  <Box mr={2} mb={4} ml={4}>
                    <Image
                      borderRadius={10}
                      objectFit={"cover"}
                      src={user.snippet.thumbnails.high.url}
                      h={100}
                      w={200}
                    />
                  </Box>
                  <Box width={300}>
                    <Text
                      fontSize={"13px"}
                      p={1}
                      color={"white"}
                      alignItems={"left"}
                      textAlign={"left"}
                    >
                      {user.snippet.title}
                    </Text>
                    <Flex ml={5}>
                      <Image
                        mt={2}
                        src={icon[i].img}
                        borderRadius={700}
                        height={10}
                        width={10}
                      />
                      <Text
                        p={3}
                        color={"white"}
                        alignItems={"left"}
                        textAlign={"left"}
                      >
                        {user.snippet.channelTitle}
                      </Text>
                    </Flex>
                  </Box>
                  {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
                </Flex>
              </Link>
            );
          })}
        </Box>
        }
      </Flex>
    </Box>
  );
}

export default Video;
