import { Flex, HStack } from '@chakra-ui/react';
import { useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { stories } from '../../test-data/stories';
import { CustomIcon } from './CustomIcon';
import { Story } from './Story';

export const Stories = () => {
  const storiesRef = useRef<HTMLDivElement>(null);
  const scrollDistance = 400;
  return (
    <HStack width={'full'} height={'400px'} position={'relative'}>
      <HStack
        width={'full'}
        height='400px'
        overflowX={'scroll'}
        className='disable-scrollbars stories'
        ref={storiesRef}
      >
        {stories.map((story, index) => (
          <Story story={story} key={index} />
        ))}
      </HStack>
      <Flex
        height={'full'}
        position='absolute'
        alignItems={'center'}
        marginLeft='2px'
      >
        <CustomIcon
          flexProps={{
            boxSize: 20,
            position: 'absolute',
            alignItems: 'center',
            bgColor: 'black',
            opacity: '50%',
          }}
          icon={BsFillArrowLeftCircleFill}
          fontSize={'60px'}
          margin={'auto'}
          paddingRight='-2px'
          color='white'
          justifySelf={'flex-end'}
          onClick={() => {
            storiesRef.current?.scrollBy({
              left: -scrollDistance,
              behavior: 'smooth',
            });
          }}
        />
      </Flex>
      <Flex
        height={'full'}
        position='absolute'
        alignItems={'center'}
        left={'100%'}
        flexDirection={'row-reverse'}
        marginLeft='-2px'
      >
        <CustomIcon
          flexProps={{
            boxSize: 20,
            position: 'absolute',
            alignItems: 'center',
            bgColor: 'black',
            opacity: '50%',
          }}
          icon={BsFillArrowRightCircleFill}
          fontSize={'60px'}
          margin={'auto'}
          paddingRight='-2px'
          color='white'
          onClick={() => {
            storiesRef.current?.scrollBy({
              left: scrollDistance,
              behavior: 'smooth',
            });
          }}
        />
      </Flex>
    </HStack>
  );
};
