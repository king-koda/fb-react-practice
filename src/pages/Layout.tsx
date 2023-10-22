import { HStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { LeftSidebar } from "../components/nav/LeftSidebar";
import { NavBar } from "../components/nav/NavBar";
import { RightSidebar } from "../components/nav/RightSidebar";

export const Layout = () => {
  const collapseSideBars = false; //useMediaQuery({ maxWidth: 700 });

  return (
    <>
      <NavBar></NavBar>
      <HStack height="full">
        {collapseSideBars ? <></> : <LeftSidebar></LeftSidebar>}
        <Outlet></Outlet>
        {collapseSideBars ? <></> : <RightSidebar></RightSidebar>}
      </HStack>
    </>
  );
};
