import {
  Box,
  Flex,
  Spacer,
  Image,
  Input,
  Text,
  Button,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ImSearch } from "react-icons/im";
import { SearchIcon } from "@chakra-ui/icons";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../Context/AuthContext";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";

// const getMovies = async(value)=>{
//   const res =await fetch(`https://www.omdbapi.com/?s=${value}&apikey=257139fa`)
//   const data = await res.json()
//   return data
// }

const getData = async (value) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${value}&key=AIzaSyCbv-a-BvGpNR_8VxG5qapH5tt6REYKv0E`
  );

  const data = await res.json();

  return data;
};

// const api_key="AIzaSyDM4yKME-qumKqk0yHP9OzRTe3KYUls4Ak"
// let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
// const apiKey = "AIzaSyAdhcycG-lZsTLxeZRglMadNCJKSR54FRQ"

function Navbar() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [trend, setTrending] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { setCart, checkOut } = useContext(cartContext);
  const navigate = useNavigate();
  // console.log(setCart)

  useEffect(() => {
    handleTheData();
  }, [value]);

  const handleTheData = async () => {
    setData([]);
    const append = await getData(value);
    setData(append.items);
    console.log("data", data);
    // const append = await getMovies(value)
    // setData(append.Search)
  };
  console.log("data", data);
  console.log(value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      setCart([]);
      setCart(data);
      navigate("/search");
    }
  };

  return (
    <Box className="fixed">
      <Flex m={3}>
        <Flex>
          {/* Drawer  */}
          {/* <Button ref={btnRef} background="none" onClick={onOpen}>
            <MenuOutlinedIcon style={{ background: "none", color: "white" }} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Flex>
                  <Button mr={3} background="none" onClick={onClose}>
                    <MenuOutlinedIcon
                      style={{ background: "none", color: "white" }}
                    />
                  </Button>
                  <Image
                    width={125}
                    h={10}
                    ml={5}
                    src="https://github.com/Ghanishtkhurana/youtube/blob/main/imagesLogo/youtube%20Diwali.gif?raw=true"
                    alt=""
                  />
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                
              </DrawerFooter>
            </DrawerContent>
          </Drawer> */}

          <Link to="/">
            <Image
              width={125}
              h={10}
              ml={5}
              src="https://github.com/Ghanishtkhurana/youtube/blob/main/imagesLogo/youtube%20Diwali.gif?raw=true"
              alt=""
            />
          </Link>
        </Flex>
        <Spacer />
        <Box>
          <Input
            width={500}
            mt={2}
            placeholder="Search"
            color="grey"
            borderLeftRadius={20}
            borderRightRadius={0}
            border="1px"
            onChange={(e) => setValue(e.target.value)}
            borderColor="grey"
            onKeyPress={(event) => handleKeyPress(event)}
          />
          <Button
            mt={-1.5}
            background="none"
            borderRightRadius={20}
            border="1px"
            borderColor={"grey"}
            borderLeftRadius={0}
            colorScheme="gray"
          >
            {value.length === 0 ? (
              <SearchOutlinedIcon
                backround="none"
                style={{ color: "grey", background: "none" }}
              />
            ) : (
              <Text onClick={() => setValue("")} background={"none"}>
                <CloseIcon style={{ color: "grey", background: "none" }} />
              </Text>
            )}
          </Button>
          {value.length !== 0 && (
            <Box
              position={"absolute"}
              mt={1}
              h={300}
              width={560}
              backgroundColor={"white"}
              borderRadius={10}
              className="suggest"
            >
              {data.map((user, i) => (
                <Link to={`/video/${user.id.videoId}`} key={i}>
                  <Box backgroundColor={"white"} overflow={"hidden"}>
                    <Text
                      m={3}
                      textAlign={"left"}
                      backgroundColor={"white"}
                      color={"black"}
                    >
                      {user.snippet.title}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Box>
          )}
        </Box>
        <Spacer />
        <Box>
          <Button
            mr={1}
            background={"none"}
            mt={2}
            borderRadius={50}
            h={10}
            w={10}
          >
            {" "}
            <VideoCallOutlinedIcon
              style={{ color: "grey", background: "none" }}
            />
          </Button>
          <Button
            mr={1}
            background={"none"}
            mt={2}
            borderRadius={50}
            h={10}
            w={10}
          >
            {" "}
            <NotificationAddOutlinedIcon
              style={{ color: "grey", background: "none" }}
            />
          </Button>
        </Box>
        <Box>
          <Image
            mt={2}
            src="https://i.pinimg.com/564x/c0/97/83/c09783bcd3ab0872bea1565a87219857.jpg"
            borderRadius={700}
            height={10}
            width={10}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
// Search-https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${api_key}

// Trending-https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=5&key=${api_key}
