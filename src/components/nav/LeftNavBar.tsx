import { Flex } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { CustomIcon } from "@/components/icons/CustomIcon";
import { SearchBar } from "@/components/nav/SearchBar";

export const LeftNavBar = () => {
  return (
    <Flex className="outerNav">
      <CustomIcon icon={BsFacebook} onClick={() => {}} />
      <SearchBar />
    </Flex>
  );
};
