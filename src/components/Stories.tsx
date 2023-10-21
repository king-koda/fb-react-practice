import { Flex, HStack } from "@chakra-ui/react";
import { stories } from "../../test-data/stories";
import { Story } from "./Story";
import { CustomIcon } from "./CustomIcon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Stories = () => {
  return (
    <>
      <CustomIcon
        flexProps={{
          boxSize: 20,
          position: "absolute",
          alignItems: "center",
          bgColor: "black",
          opacity: "50%",
          height: "400px",
        }}
        icon={AiOutlineArrowLeft}
        fontSize={"60px"}
        margin={"auto"}
        paddingRight="-2px"
        color="white"
        justifySelf={"flex-end"}
      />
      <Flex
        direction={"row"}
        width={"full"}
        overflowX={"scroll"}
        className="disable-scrollbars"
        position="relative"
        height="400px"
        bgColor="yellow"
      >
        {stories.map((story) => (
          <Story story={story} />
        ))}
      </Flex>
      <CustomIcon
        flexProps={{
          boxSize: 20,
          position: "absolute",
          alignItems: "center",
          bgColor: "black",
          opacity: "50%",
          height: "400px",
        }}
        icon={AiOutlineArrowRight}
        fontSize={"60px"}
        margin={"auto"}
        paddingRight="-2px"
        color="white"
      />
    </>
  );
};
