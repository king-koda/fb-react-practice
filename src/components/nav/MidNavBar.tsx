import { ButtonIconWithUnderline } from '@/components/icons/ButtonIconWithUnderline';
import { Flex } from '@chakra-ui/react';
import { BsFillHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { ImPlay } from 'react-icons/im';
import { IoPeopleCircleOutline } from 'react-icons/io5';

export const MidNavBar = () => {
  return (
    <Flex className='innerNav'>
      <ButtonIconWithUnderline
        icon={BsFillHouseFill}
        pageType={'HOME'}
        tooltipProps={{ label: 'Home' }}
      />
      <ButtonIconWithUnderline
        icon={BsFillPeopleFill}
        pageType={'FRIENDS'}
        tooltipProps={{ label: 'Friends' }}
      />
      <ButtonIconWithUnderline
        icon={ImPlay}
        pageType={'VIDEOS'}
        tooltipProps={{ label: 'Videos' }}
      />
      <ButtonIconWithUnderline
        icon={FaShop}
        pageType={'MARKETPLACE'}
        tooltipProps={{ label: 'Marketplace' }}
      />
      <ButtonIconWithUnderline
        icon={IoPeopleCircleOutline}
        pageType={'GROUPS'}
        tooltipProps={{ label: 'Groups' }}
      />
    </Flex>
  );
};
