import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { HStack, VStack } from '@chakra-ui/react';
import { LeftSidebar } from '../components/LeftSidebar';
import { RightSidebar } from '../components/RightSidebar';

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      {/* <VStack>
        <HStack width={"full"}>
          <LeftSidebar></LeftSidebar>
          <Outlet></Outlet>
          <RightSidebar></RightSidebar>
        </HStack>
      </VStack> */}
    </>
  );
};
