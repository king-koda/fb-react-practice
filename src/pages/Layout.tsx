import { LeftSidebar } from '@/components/nav/LeftSidebar';
import { NavBar } from '@/components/nav/NavBar';
import { RightSidebar } from '@/components/nav/RightSidebar';
import { HStack } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const collapseLeftSideBar = useMediaQuery({ maxWidth: 1050 });
  const collapseRightSideBar = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      <NavBar></NavBar>
      <HStack height='full' justifyContent={'center'}>
        {collapseLeftSideBar ? <></> : <LeftSidebar></LeftSidebar>}
        <Outlet></Outlet>
        {collapseRightSideBar ? <></> : <RightSidebar></RightSidebar>}
      </HStack>
    </>
  );
};
