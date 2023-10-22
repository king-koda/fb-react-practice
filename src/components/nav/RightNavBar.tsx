import { Flex } from "@chakra-ui/react";
import { SiApacherocketmq } from "react-icons/si";
import { AiFillMessage, AiOutlinePlus } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CustomIcon } from "../icons/CustomIcon";

export const RightNavBar = () => {
  return (
    <Flex
      className="outerNav"
      justifyContent={"flex-end"}
      borderLeft="4px solid black"
    >
      <CustomIcon icon={AiOutlinePlus} />
      <CustomIcon icon={AiFillMessage} />
      <CustomIcon icon={IoMdNotifications} />
      <CustomIcon icon={SiApacherocketmq} />
    </Flex>
  );
};