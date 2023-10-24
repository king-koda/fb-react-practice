import { Flex, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { StoryType } from "@/lib/types";
import { CustomIcon } from "@/components/icons/CustomIcon";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ProfileIcon } from "@/components/profile/ProfileIcon";
import { StoryImagePreview } from "@/components/stories/StoryImagePreview";

type Props = {
  story: StoryType;
  index: number;
};

export const Story = (props: Props) => {
  const { story, index } = props;
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return index === 0 ? (
    <MyStory />
  ) : (
    <Flex
      borderRadius={"20"}
      minWidth="200px"
      height="full"
      marginLeft={index === 0 ? 0 : 4}
      className="story"
      style={{ contain: "strict" }}
      onClick={() => {
        if (!isClicked) {
          setIsClicked(true);
        }
        if (videoRef?.current?.paused) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      }}
      position={"relative"}
      key={`${story.profileId}-story`}
    >
      <ProfileIcon
        profileIcon={story.profileIcon}
        profileId={story.profileId}
        key={`${story.profileId}-story-profile-icon`}
      />
      <Text
        pos={"absolute"}
        top="90%"
        width={"full"}
        textAlign={"center"}
        textColor={"white"}
        fontSize={"xl"}
        textShadow={"0 0 3px black"}
        fontFamily={"monospace"}
        stroke={"black"}
        key={`${story.profileId}-story-profile-name`}
      >
        {story.profileName}
      </Text>
      {isClicked && (
        <video
          ref={videoRef}
          autoPlay
          style={{ objectFit: "fill", cursor: "pointer", zIndex: -1 }}
          key={`${story.profileId}-story-video`}
        >
          <source
            src={story.videoURL}
            type="video/mp4"
            key={`${story.profileId}-story-video-source`}
          />
        </video>
      )}
      {!isClicked && (
        <StoryImagePreview
          profileId={story.profileId}
          imageSource={story.previewImage}
          key={`${story.profileId}-story-preview`}
        />
      )}
    </Flex>
  );
};

const MyStory = () => {
  return (
    <Flex
      borderRadius={"20"}
      minWidth="200px"
      height="100%"
      className="story secondary"
      style={{ contain: "strict" }}
      position={"relative"}
      key={`${sessionStorage.getItem("userId")}-story-create`}
    >
      <CustomIcon
        icon={AiOutlinePlusCircle}
        flexProps={{
          position: "absolute",
          placeContent: "center",
          top: "75%",
          width: "100%",
        }}
        className="secondary"
        color="white"
        borderRadius={90}
        fontSize="5xl"
      />
      <Text
        top="90%"
        pos={"absolute"}
        width={"full"}
        textAlign={"center"}
        textColor={"white"}
        fontSize={"xl"}
        textShadow={"0 0 3px black"}
        fontFamily={"monospace"}
        stroke={"black"}
        zIndex={5000}
      >
        Create story
      </Text>
      <StoryImagePreview
        paddingBottom="60px"
        profileId={Number(sessionStorage.getItem("userId"))}
        imageSource="src/assets/badger.png"
        key={`${sessionStorage.getItem("userId")}-story-preview`}
        shouldZoom={false}
      />
    </Flex>
  );
};
