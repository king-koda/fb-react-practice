import { Box, Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {};

export const LeftSidebar = ({}: Props) => {
  return (
    <Flex
      bgColor={"yellow"}
      width="20%"
      borderRight={"2px solid blue"}
      height={"2000px"}
      position="fixed"
      left="0"
    ></Flex>
  );
};
