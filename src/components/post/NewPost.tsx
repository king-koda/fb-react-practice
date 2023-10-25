import { NewPostButton } from '@/components/post/NewPostButton';
import { ProfileIcon } from '@/components/profile/ProfileIcon';
import { Divider, Flex, Input, Text } from '@chakra-ui/react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { TfiGallery } from 'react-icons/tfi';

export const NewPost = () => {
  return (
    <Flex
      className='secondary'
      height='150px'
      boxShadow={'lg'}
      width={'full'}
      borderRadius={30}
      direction={'column'}
      paddingX='10px'
    >
      <Flex direction={'row'} height='50%' paddingY='10px'>
        <ProfileIcon
          profileIcon={'src/assets/badger.png'}
          profileId={Number(sessionStorage.getItem('userId'))}
          key={`${sessionStorage.getItem('userId')}-story-profile-icon`}
          pos={undefined}
          marginTop={undefined}
          marginLeft={undefined}
          border='none'
          boxSize={12}
          placeSelf={'center'}
        />
        <Input
          className='tertiary'
          background=''
          placeholder={`What's on your mind, ${sessionStorage.getItem(
            'firstName'
          )}?`}
          _placeholder={{
            color: 'gray.400',
            fontSize: 'md',
            fontFamily: 'monospace',
          }}
          alignSelf='center'
          borderRadius={20}
          height='80%'
          marginLeft='2'
          color='white'
          fontSize='md'
          fontFamily={'monospace'}
          border='none'
        />
      </Flex>
      <Divider width={'100%'} alignSelf='center' />
      <Flex direction={'row'} height='50%' width='100%' paddingY='10px'>
        <NewPostButton
          icon={AiOutlineVideoCamera}
          onClick={() => {}}
          tooltipProps={{ label: 'Live video' }}
        >
          <Text fontWeight={'bold'} alignSelf='center' color='white'>
            Live video
          </Text>
        </NewPostButton>
        <NewPostButton
          icon={TfiGallery}
          onClick={() => {}}
          tooltipProps={{ label: 'Photo/video' }}
        >
          <Text fontWeight={'bold'} alignSelf='center' color='white'>
            Photo/video
          </Text>
        </NewPostButton>
        <NewPostButton
          icon={BsEmojiHeartEyes}
          onClick={() => {}}
          tooltipProps={{ label: 'Feeling/activity' }}
        >
          <Text fontWeight={'bold'} alignSelf='center' color='white'>
            Feeling/activity
          </Text>
        </NewPostButton>
      </Flex>
    </Flex>
  );
};
