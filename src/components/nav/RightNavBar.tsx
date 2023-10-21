import { Flex } from '@chakra-ui/react';
import { SiApacherocketmq } from 'react-icons/si';
import { AiFillMessage, AiOutlinePlus } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CustomIcon } from '../icons/CustomIcon';

export const invertedIconProps = {
  color: undefined,
  bgColor: 'gray.500',
  borderRadius: '90',
  _hover: { color: 'gray.600' },
};

export const RightNavBar = () => {
  return (
    <Flex className='outerNav' justifyContent={'flex-end'} flex='auto'>
      <CustomIcon icon={AiOutlinePlus} {...invertedIconProps} />
      <CustomIcon icon={AiFillMessage} />
      <CustomIcon icon={IoMdNotifications} {...invertedIconProps} />
      <CustomIcon icon={SiApacherocketmq} {...invertedIconProps} />
    </Flex>
  );
};
