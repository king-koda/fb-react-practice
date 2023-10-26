import { IconWithUnderline } from '@/components/icons/IconWithUnderline';
import { Flex } from '@chakra-ui/react';
import { BsFillHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { ImPlay } from 'react-icons/im';
import { IoPeopleCircleOutline } from 'react-icons/io5';

export const MidNavBar = () => {
  return (
    <Flex className='innerNav'>
      <IconWithUnderline icon={BsFillHouseFill} pageType={'HOME'} />
      <IconWithUnderline icon={BsFillPeopleFill} pageType={'FRIENDS'} />
      <IconWithUnderline icon={ImPlay} pageType={'VIDEOS'} />
      <IconWithUnderline icon={FaShop} pageType={'MARKETPLACE'} />
      <IconWithUnderline icon={IoPeopleCircleOutline} pageType={'GROUPS'} />
    </Flex>
  );
};
