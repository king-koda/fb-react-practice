import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';

export const Home = () => {
  return (
    <Flex width='1px' height='1px' flex='1 1 auto'>
      <VStack>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
      </VStack>
      <HStack>
        {/* <LeftSidebar></LeftSidebar>
        <MainContent></MainContent>
        <RightSidebar></RightSidebar> */}
      </HStack>
    </Flex>
  );
};
