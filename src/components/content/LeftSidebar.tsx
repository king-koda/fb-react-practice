import { Flex, Text } from '@chakra-ui/react';

type Props = {};

export const LeftSidebar = ({}: Props) => {
  return (
    <>
      <Flex className='sidebar' height='full'>
        <Text>Left</Text>
      </Flex>
    </>
  );
};
