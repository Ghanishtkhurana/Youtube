import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from "react-router-dom";

function SideBar(){
    return (
        <Box>
            <Stack mt={8} ml={2} mr={2} position={"fixed"} spacing={8} justifyContent={"center"} alignItems={"center"} >
                <Box>
                <Link to="/"><HomeOutlinedIcon  style={{color:"white",fontSize:"40px"}}/></Link>
                <Text color={"white"} fontSize={"11px"}>Home</Text>
                </Box>
                <Box>
                <Link to="/trend"><WhatshotIcon style={{color:"white",fontSize:"40px"}}/></Link>
                <Text color={"white"} fontSize={"11px"}>Trending</Text>
                <Image h={10} mt={5} w={"19"} src="https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_1280.png" />
                <Text color={"white"} fontSize={"11px"}>Shorts</Text>

                </Box>
                <Box>
                <SubscriptionsOutlinedIcon style={{color:"white",fontSize:"40px"}}/>
                <Text color={"white"} fontSize={"10px"}>Subscriptions</Text>
                </Box>
                <Box>
                <VideoLibraryOutlinedIcon style={{color:"white",fontSize:"40px"}}/>
                <Text color={"white"} fontSize={"11px"}>Library</Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default SideBar