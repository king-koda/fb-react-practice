import { Box, Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

export const IconWithUnderline = ({ icon }: Props) => {
  return (
    <Flex borderBottom={"2px solid blue"}>
      <Icon marginY="auto" marginX={10} as={icon} fontSize={["3xl"]}></Icon>
    </Flex>
  );
};
