import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";

const Trending = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=24&key=AIzaSyBqRSgqiC4exIS1hzBXVkRuZx-TjV8xOpU"
  );

  const data = await res.json();
  return data;
};
// api=AIzaSyCrZrTfT3Sf0gk2cwxmjl9slRPvLGq-00Y
// api2 = AIzaSyCbv-a-BvGpNR_8VxG5qapH5tt6REYKv0E
// api3=AIzaSyAwMzRuNL9dxF3C5gISJjUQxVGMy9avl8Y
// api3.5=AIzaSyBqRSgqiC4exIS1hzBXVkRuZx-TjV8xOpU
// api4=AIzaSyCJl02z7x1LoitqX5yn_ehCXgT0s_DNSDQ
// api 5 = AIzaSyBU1ZJIAIET6nyy9x_5HSe5qWLo5wd7gks
function Trend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleTheTrending();
  }, []);

  const handleTheTrending = async () => {
    const append = await Trending();
    setData(append.items);
  };
  console.log(data);
  return (
    <div className="trending">
      <Navbar />
      <SideBar/>
      <Box ml={20}>
      <SimpleGrid  mt={10} columns={[1, 2, 3, 4]} gap={5} mr={2} ml={2}>
        {data.map((user, i) => {
          return (
            <Link to={`/video/${user.id}`}>
            <Box key={i}>
                <Box>
                  <Image
                    borderRadius={10}
                    objectFit={"cover"}
                    src={user.snippet.thumbnails.high.url}
                    h={168}
                    w={300}
                  />
                </Box>
              <Text color={"white"} textAlign="left">
                {user.snippet.title}
              </Text>
              {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
            </Box>
            </Link>
          );
        })}
      </SimpleGrid>
      </Box>
    </div>
  );
}

export default Trend;
