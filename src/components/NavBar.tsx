import { Flex, HStack, Icon } from '@chakra-ui/react';
import { BsFacebook, BsFillHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { CiShop } from 'react-icons/ci';
import { ImPlay } from 'react-icons/im';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { IconWithUnderline } from './IconWithUnderline';
import { SearchBar } from './SearchBar';
import { CustomIcon } from './CustomIcon';
import MediaQuery from 'react-responsive';

export const NavBar = () => {
  return (
    <HStack
      position='relative'
      width={'100%'}
      minHeight='5%'
      backgroundColor={'blue.700'}
      gap={undefined}
    >
      <Flex
        flex='auto'
        // justifyContent={'space-between'}
        // marginX={1}
        width={'33.33%'}
        overflowX={'hidden'}
      >
        <CustomIcon icon={BsFacebook} />
        <CustomIcon icon={BsFacebook} />

        {/* <SearchBar></SearchBar> */}
      </Flex>

      <MediaQuery minWidth={200}>
        <Flex
          width={'33.33%'}
          justifyContent={'space-between'}
          flex='auto'
          overflowX={'hidden'}
          className='mainnn'
        >
          <IconWithUnderline icon={BsFillHouseFill}></IconWithUnderline>
          <IconWithUnderline icon={BsFillPeopleFill}></IconWithUnderline>
          <IconWithUnderline icon={ImPlay}></IconWithUnderline>
          <IconWithUnderline icon={CiShop}></IconWithUnderline>
          <IconWithUnderline icon={IoPeopleCircleOutline}></IconWithUnderline>
        </Flex>
      </MediaQuery>
      <Flex
        width={'33.33%'}
        flexDirection={'row-reverse'}
        flex='auto'
        overflowX={'hidden'}
      >
        <CustomIcon icon={BsFacebook} />
        <CustomIcon icon={BsFacebook} />
        <CustomIcon icon={BsFacebook} />
        <CustomIcon icon={BsFacebook} />
      </Flex>
    </HStack>
  );
};
