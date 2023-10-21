import { Flex, Image, Text } from '@chakra-ui/react';
import { Story as StoryType } from '../lib/types';
import { useRef, useState } from 'react';

type Props = {
  story: StoryType;
};

export const Story = (props: Props) => {
  const { story } = props;
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Flex
      borderRadius={'20'}
      minWidth='200px'
      height='90%'
      marginX='3'
      className='story'
      style={{ contain: 'strict' }}
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
      position={'relative'}
      key={`${story.profileId}-story`}
    >
      <Flex
        pos={'absolute'}
        boxSize={20}
        borderRadius={45}
        style={{ contain: 'strict' }}
        marginLeft={2}
        marginTop={2}
        border='dodgerblue 4px solid'
        key={`${story.profileId}-story-profile-icon-flex`}
      >
        {
          <Image
            src={story.profileIcon}
            key={`${story.profileId}-story-profile-icon`}
          />
        }
      </Flex>
      <Text
        pos={'absolute'}
        top='90%'
        width={'full'}
        textAlign={'center'}
        textColor={'white'}
        fontSize={'xl'}
        textShadow={'0 0 3px black'}
        fontFamily={'monospace'}
        stroke={'black'}
        key={`${story.profileId}-story-profile-name`}
      >
        {story.profileName}
      </Text>
      {isClicked && (
        <video
          ref={videoRef}
          autoPlay
          style={{ objectFit: 'fill' }}
          key={`${story.profileId}-story-video`}
        >
          <source
            src={story.videoURL}
            type='video/mp4'
            key={`${story.profileId}-story-video-source`}
          />
        </video>
      )}
      {!isClicked && (
        <Image
          src={story.previewImage}
          key={`${story.profileId}-story-preview`}
        />
      )}
    </Flex>
  );
};
