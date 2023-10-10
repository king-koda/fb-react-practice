import { Flex } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { CustomIcon } from './CustomIcon';

export const RightNavBar = () => {
  return (
    <Flex className='outerNav' flexDirection={'row-reverse'} flex='auto'>
      <CustomIcon icon={BsFacebook} />
      <CustomIcon icon={BsFacebook} />
      <CustomIcon icon={BsFacebook} />
      <CustomIcon icon={BsFacebook} />
    </Flex>
  );
};