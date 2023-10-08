import { Box, Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Flex
      bgColor={"red"}
      borderLeft={"2px solid blue"}
      width="20%"
      height={"2000px"}
      position="fixed"
      right="0"
    ></Flex>
  );
};
