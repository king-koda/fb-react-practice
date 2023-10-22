import { Flex, HStack } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { stories } from "../../../test-data/stories";
import { StoriesNavigationButton } from "./StoriesNavigationButton";
import { StoryType } from "../../lib/types";
import { Story } from "./Story";

export const Stories = () => {
  const storiesRef = useRef<HTMLDivElement>(null);
  const scrollDistance = 200;

  const onStoryNavigation = (type: "forward" | "backward") => {
    if (storiesRef?.current)
      storiesRef.current?.scrollBy({
        left: type === "backward" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
  };

  return (
    <HStack width={"full"} position={"relative"} className="stories-stack">
      <StoriesCarousel ref={storiesRef} stories={stories} />

      <StoriesNavigationButton
        icon={BsFillArrowLeftCircleFill}
        onClick={onStoryNavigation}
        type="backward"
      />
      <StoriesNavigationButton
        icon={BsFillArrowRightCircleFill}
        onClick={onStoryNavigation}
        type="forward"
      />
    </HStack>
  );
};

type StoriesCarouselProps = {
  stories: StoryType[];
};

const StoriesCarousel = forwardRef<HTMLDivElement, StoriesCarouselProps>(
  function ({ stories }, ref) {
    return (
      <HStack
        width={"full"}
        height="350px"
        overflowX={"scroll"}
        className="disable-scrollbars stories"
        ref={ref}
        borderRadius={45}
        alignItems={"flex-start"}
      >
        {stories.map((story, index) => (
          <Story story={story} key={index} index={index} />
        ))}
      </HStack>
    );
  }
);
