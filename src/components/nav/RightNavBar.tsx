import { Flex } from "@chakra-ui/react";
import { FaUserCog } from "react-icons/fa";
import { AiFillMessage, AiOutlinePlus } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CustomIcon } from "../icons/CustomIcon";

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
      <CustomIcon icon={AiOutlinePlus} onClick={() => {}} />
    </Flex>
  );
};
