import { Flex } from '@chakra-ui/react';
import { BsFillHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { ImPlay } from 'react-icons/im';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { IconWithUnderline } from '../icons/IconWithUnderline';

export const MidNavBar = () => {
  return (
    <Flex justifyContent={'space-between'} flex='auto' width='60%'>
      <IconWithUnderline
        icon={BsFillHouseFill}
        pageType={'HOME'}
      ></IconWithUnderline>
      <IconWithUnderline
        icon={BsFillPeopleFill}
        pageType={'FRIENDS'}
      ></IconWithUnderline>
      <IconWithUnderline icon={ImPlay} pageType={'VIDEOS'}></IconWithUnderline>
      <IconWithUnderline
        icon={FaShop}
        pageType={'MARKETPLACE'}
      ></IconWithUnderline>
      <IconWithUnderline
        icon={IoPeopleCircleOutline}
        pageType={'GROUPS'}
      ></IconWithUnderline>
    </Flex>
  );
};
