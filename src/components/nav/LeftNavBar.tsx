import { Flex } from "@chakra-ui/react";
import { BsFacebook, BsFillHouseFill } from "react-icons/bs";
import { CustomIcon } from "../icons/CustomIcon";
import { BiSearch } from "react-icons/bi";
import { invertedIconProps } from "./RightNavBar";
import { SearchBar } from "./SearchBar";

export const LeftNavBar = () => {
  return (
    <Flex className="outerNav" borderRight="4px solid black">
      <CustomIcon icon={BsFacebook} />
      <SearchBar />
    </Flex>
  );
};
