import { CustomIcon } from "@/components/icons/CustomIcon";
import { Flex } from "@chakra-ui/react";
import { AiFillMessage, AiFillPlusCircle } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

export const RightNavBar = () => {
  return (
    <Flex
      className="outerNav"
      justifyContent={"flex-start"}
      flexDir={"row-reverse"}
    >
      <CustomIcon icon={FaUserCog} onClick={() => {}} />
      <CustomIcon icon={IoMdNotifications} onClick={() => {}} />
      <CustomIcon icon={AiFillMessage} onClick={() => {}} />
      <CustomIcon icon={AiFillPlusCircle} onClick={() => {}} />
    </Flex>
  );
};
