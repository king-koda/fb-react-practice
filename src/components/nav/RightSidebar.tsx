import { Flex, Text } from "@chakra-ui/react";

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Flex className="sidebar" height="full" borderLeft="4px solid black">
      <Text>Right</Text>
    </Flex>
  );
};
