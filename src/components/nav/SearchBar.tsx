import { Flex, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { CustomIcon } from "../icons/CustomIcon";

export const SearchBar = () => {
  return (
    <Flex className="tertiary" borderRadius={30} padding="2">
      <CustomIcon
        icon={BiSearch}
        fontSize={"xl"}
        alignSelf="center"
      ></CustomIcon>
      <Input
        placeholder={`Search Fakebook`}
        _placeholder={{
          color: "gray.400",
          fontSize: "sm",
          fontStyle: "italic",
          fontFamily: "monospace",
        }}
        alignSelf="center"
        height="full"
        marginLeft="2"
        color="white"
        fontSize="sm"
        fontFamily={"monospace"}
        border="none"
        variant={"unstyled"}
      ></Input>
    </Flex>
  );
};
