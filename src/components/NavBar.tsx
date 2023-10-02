import { Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import { IconWithUnderline } from "./IconWithUnderline";
import { BsFacebook, BsFillHouseFill, BsFillPeopleFill } from "react-icons/bs";
import { ImPlay } from "react-icons/im";
import { CiShop } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";

export const NavBar = () => {
  return (
    <HStack
      position="fixed"
      top={0}
      left={0}
      width={"100%"}
      height="5%"
      justifyContent={"space-between"}
      backgroundColor={"blackAlpha.800"}
    >
      <Flex justifySelf={"left"} marginX={1}>
        <Icon fontSize={"4xl"} as={BsFacebook}></Icon>
        <SearchBar></SearchBar>
      </Flex>

      <Flex height="100%">
        <IconWithUnderline icon={BsFillHouseFill}></IconWithUnderline>
        <IconWithUnderline icon={BsFillPeopleFill}></IconWithUnderline>
        <IconWithUnderline icon={ImPlay}></IconWithUnderline>
        <IconWithUnderline icon={CiShop}></IconWithUnderline>
        <IconWithUnderline icon={IoPeopleCircleOutline}></IconWithUnderline>
      </Flex>
      <Flex marginX={1}>
        <Icon fontSize={"4xl"} as={BsFacebook}></Icon>
        <Icon fontSize={"4xl"} as={BsFacebook}></Icon>
        <Icon fontSize={"4xl"} as={BsFacebook}></Icon>
        <Icon fontSize={"4xl"} as={BsFacebook}></Icon>
      </Flex>
    </HStack>
  );
};
