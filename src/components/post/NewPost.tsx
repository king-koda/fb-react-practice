import { NewPostButton } from "@/components/post/NewPostButton";
import { ProfileIcon } from "@/components/profile/ProfileIcon";
import { Divider, Flex, Input } from "@chakra-ui/react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";

export const NewPost = () => {
  return (
    <Flex
      className="secondary"
      height="200px"
      boxShadow={"lg"}
      width={"full"}
      borderRadius={30}
      direction={"column"}
    >
      <Flex direction={"row"} height="50%" padding="2">
        <ProfileIcon
          profileIcon={"@/assets/badger.png"}
          profileId={Number(sessionStorage.getItem("userId"))}
          key={`${sessionStorage.getItem("userId")}-story-profile-icon`}
          pos={undefined}
          marginTop={undefined}
          marginLeft={undefined}
          border="1px solid gray"
        />
        <Input
          className="tertiary"
          background=""
          placeholder={`What's on your mind, ${sessionStorage.getItem(
            "firstName"
          )}?`}
          _placeholder={{
            color: "gray.400",
            fontSize: "xl",
            fontStyle: "italic",
            fontFamily: "monospace",
          }}
          alignSelf="center"
          borderRadius={30}
          height="70%"
          marginLeft="2"
          color="white"
          fontSize="xl"
          fontFamily={"monospace"}
          border="none"
        />
      </Flex>
      <Divider width={"95%"} alignSelf="center" />
      <Flex direction={"row"} height="50%" width="100%" padding="2">
        <NewPostButton icon={AiOutlineVideoCamera} />
        <NewPostButton icon={TfiGallery} />
        <NewPostButton icon={BsEmojiHeartEyes} />
      </Flex>
    </Flex>
  );
};
