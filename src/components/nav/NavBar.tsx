import { LeftNavBar } from "@/components/nav/LeftNavBar";
import { MidNavBar } from "@/components/nav/MidNavBar";
import { RightNavBar } from "@/components/nav/RightNavBar";
import { HStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

export const NavBar = () => {
  const showFullNav = useMediaQuery({ minWidth: 1050 });
  return (
    <HStack className="nav content">
      <LeftNavBar />
      {showFullNav && <MidNavBar />}
      <RightNavBar />
    </HStack>
  );
};
