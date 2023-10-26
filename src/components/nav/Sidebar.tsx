import { Flex } from '@chakra-ui/react';

export const Sidebar = ({ children }) => {
  return (
    <Flex className='sidebar' height='4000px'>
      {children}
    </Flex>
  );
};
