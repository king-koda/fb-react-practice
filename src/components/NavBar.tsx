import { Flex, HStack, Icon } from "@chakra-ui/react";
import { BsFacebook, BsFillHouseFill, BsFillPeopleFill } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { ImPlay } from "react-icons/im";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IconWithUnderline } from "./IconWithUnderline";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <HStack
      position="fixed"
      zIndex={50}
      top={0}
      left={0}
      width={"100%"}
      height="5%"
      justifyContent={"space-between"}
      backgroundColor={"blue.700"}
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
