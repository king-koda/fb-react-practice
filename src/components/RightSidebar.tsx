import { Flex, Text } from '@chakra-ui/react';

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Flex className='sidebar' height='full'>
      <Text>Right</Text>
    </Flex>
  );
};
