import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import { BiWorld } from 'react-icons/bi';
import { FiThumbsUp } from 'react-icons/fi';
import { GoKebabHorizontal } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { ButtonIcon } from '@/components/icons/ButtonIcon';
import { CustomIcon } from '@/components/icons/CustomIcon';
import { ProfileIcon } from '@/components/profile/ProfileIcon';
import { BiShare } from 'react-icons/bi';
import { MdOutlineModeComment } from 'react-icons/md';

export const Post = () => {
  return (
    <Flex
      flexDir={'column'}
      width='full'
      minH='600px'
      borderRadius={'20'}
      className='secondary'
    >
      <Flex flexDir='column' paddingX='10px'>
        <Flex paddingY='10px' paddingBottom='10px'>
          <Text className='content-text'>Suggested for you</Text>
        </Flex>
        <Divider width={'100%'} alignSelf='center' borderColor={'#4a5568'} />
        <Flex
          flexDir={'row'}
          alignItems={'center'}
          paddingY='10px'
          gap='12px !important'
        >
          <ProfileIcon
            profileIcon={'src/assets/badger.png'}
            profileId={Number(sessionStorage.getItem('userId'))}
            key={`${sessionStorage.getItem('userId')}-story-profile-icon`}
            pos={undefined}
            marginTop={undefined}
            marginLeft={undefined}
            border='none'
            boxSize={10}
            placeSelf={'center'}
          />
          <Flex
            flex='1 1 auto'
            justifyContent={'space-between'}
            alignItems='center'
          >
            <Flex alignItems={'center'}>
              <Flex flexDir={'column'}>
                <Text
                  fontSize={'14'}
                  fontWeight={'bold'}
                  className='content-text'
                >
                  Museum of Artifacts
                </Text>
                <Flex gap='12px !important'>
                  <Text
                    fontSize={'12'}
                    alignSelf='center'
                    className='content-text'
                  >
                    3 days ago
                  </Text>
                  <CustomIcon
                    icon={BiWorld}
                    fontSize={'xs'}
                    flexProps={{
                      boxSize: 4,
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    marginTop='1px'
                    tooltipProps={{ label: 'Public' }}
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex gap='12px !important'>
              <ButtonIcon
                icon={GoKebabHorizontal}
                fontSize={'3xl'}
                onClick={() => {}}
                tooltipProps={{ label: 'Actions' }}
              ></ButtonIcon>
              <ButtonIcon
                icon={RxCross2}
                fontSize={'3xl'}
                onClick={() => {}}
                tooltipProps={{ label: 'Hide' }}
              ></ButtonIcon>
            </Flex>
          </Flex>
        </Flex>
        <Text paddingY='10px' className='content-text'>
          Skull of a Roman legionary, who died during the wars of Gaul, about
          the year 52 BC. Dated to the first century BC. Death was certainly
          instant. More:
          https://thetravelbible.com/top-artifacts-from-ancient-rome/
        </Text>
      </Flex>
      <Flex flex='1 1 auto' overflowY='clip'>
        <Image src='src/assets/badger.png' width={'100%'} />
      </Flex>
      <Flex flexDir='column' paddingX='10px'>
        <Flex
          dir='row'
          paddingY='10px'
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Flex alignItems={'center'} gap='4px !important'>
            <Flex>
              <CustomIcon
                icon={BiWorld}
                fontSize={'md'}
                tooltipProps={{ label: 'TopEmoji1' }}
              />
              <CustomIcon
                icon={BiWorld}
                fontSize={'md'}
                tooltipProps={{ label: 'TopEmoji2' }}
              />
            </Flex>
            <Text fontSize={'12'} className='content-text'>
              20K
            </Text>
          </Flex>
          <Flex alignItems={'center'}>
            <Text></Text>
            <ButtonIcon
              icon={MdOutlineModeComment}
              fontSize={'md'}
              onClick={() => {}}
              tooltipProps={{ label: 'Comment' }}
            ></ButtonIcon>
            <Text></Text>
            <ButtonIcon
              icon={BiShare}
              fontSize={'md'}
              onClick={() => {}}
              tooltipProps={{ label: 'Share' }}
            ></ButtonIcon>
          </Flex>
        </Flex>
        <Divider width={'100%'} alignSelf='center' borderColor={'#4a5568'} />
        <Flex
          dir='row'
          alignSelf={'center'}
          alignItems={'center'}
          paddingY='10px'
          width={'100%'}
          justifyContent={'space-evenly'}
        >
          <ButtonIcon
            icon={FiThumbsUp}
            fontSize={'3xl'}
            onClick={() => {}}
            tooltipProps={{ label: 'Like' }}
          >
            <Text fontWeight={'bold'} alignSelf='center' color='white'>
              Like
            </Text>
          </ButtonIcon>
          <ButtonIcon
            icon={MdOutlineModeComment}
            fontSize={'3xl'}
            onClick={() => {}}
            tooltipProps={{ label: 'Comment' }}
          >
            <Text fontWeight={'bold'} alignSelf='center' color='white'>
              Comment
            </Text>
          </ButtonIcon>
          <ButtonIcon
            icon={BiShare}
            fontSize={'3xl'}
            onClick={() => {}}
            tooltipProps={{ label: 'Share' }}
          >
            <Text fontWeight={'bold'} alignSelf='center' color='white'>
              Share
            </Text>
          </ButtonIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};
