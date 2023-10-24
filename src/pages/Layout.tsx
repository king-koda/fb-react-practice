import { LeftSidebar } from "@/components/nav/LeftSidebar";
import { NavBar } from "@/components/nav/NavBar";
import { RightSidebar } from "@/components/nav/RightSidebar";
import { HStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const collapseSideBars = useMediaQuery({ maxWidth: 1050 });

  return (
    <>
      <NavBar></NavBar>
      <HStack height="full" justifyContent={"center"}>
        {collapseSideBars ? <></> : <LeftSidebar></LeftSidebar>}
        <Outlet></Outlet>
        {collapseSideBars ? <></> : <RightSidebar></RightSidebar>}
      </HStack>
    </>
  );
};
