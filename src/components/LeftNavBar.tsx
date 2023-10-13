import { Flex } from '@chakra-ui/react';
import { BsFacebook, BsFillHouseFill } from 'react-icons/bs';
import { CustomIcon } from './CustomIcon';
import { BiSearch } from 'react-icons/bi';
import { invertedIconProps } from './RightNavBar';

export const LeftNavBar = () => {
  return (
    <Flex className='outerNav' flex='auto'>
      <CustomIcon icon={BsFacebook} />
      <CustomIcon icon={BiSearch} {...invertedIconProps} />
    </Flex>
  );
};
