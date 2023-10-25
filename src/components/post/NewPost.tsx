import { NewPostButton } from '@/components/post/NewPostButton';
import { ProfileIcon } from '@/components/profile/ProfileIcon';
import { Divider, Flex, Input } from '@chakra-ui/react';
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
      padding='10px'
    >
      <Flex direction={'row'} height='50%' padding='10px'>
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
            fontSize: 'xl',
            fontFamily: 'monospace',
          }}
          alignSelf='center'
          borderRadius={20}
          height='80%'
          marginLeft='2'
          color='white'
          fontSize='xl'
          fontFamily={'monospace'}
          border='none'
        />
      </Flex>
      <Divider width={'100%'} alignSelf='center' />
      <Flex direction={'row'} height='50%' width='100%' padding='10px'>
        <NewPostButton icon={AiOutlineVideoCamera} onClick={() => {}} />
        <NewPostButton icon={TfiGallery} onClick={() => {}} />
        <NewPostButton icon={BsEmojiHeartEyes} onClick={() => {}} />
      </Flex>
    </Flex>
  );
};
