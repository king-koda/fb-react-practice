import { Flex } from '@chakra-ui/react';
import { AiFillMessage, AiFillPlusCircle } from 'react-icons/ai';
import { FaUserCog } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { ButtonIcon } from '../icons/ButtonIcon';

export const RightNavBar = () => {
  return (
    <Flex
      className='outerNav'
      justifyContent={'flex-start'}
      flexDir={'row-reverse'}
    >
      <ButtonIcon icon={FaUserCog} onClick={() => {}} />
      <ButtonIcon icon={IoMdNotifications} onClick={() => {}} />
      <ButtonIcon icon={AiFillMessage} onClick={() => {}} />
      <ButtonIcon icon={AiFillPlusCircle} onClick={() => {}} />
    </Flex>
  );
};
