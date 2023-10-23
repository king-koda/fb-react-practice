import { Flex } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { CustomIcon } from "../icons/CustomIcon";
import { SearchBar } from "./SearchBar";

export const LeftNavBar = () => {
  return (
    <Flex className="outerNav">
      <CustomIcon icon={BsFacebook} onClick={() => {}} />
      <SearchBar />
    </Flex>
  );
};
