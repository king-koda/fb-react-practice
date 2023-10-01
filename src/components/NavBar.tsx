import { Flex, HStack, Icon, VStack } from '@chakra-ui/react';
import { SearchBar } from './SearchBar';
import { IconWithUnderline } from './IconWithUnderline';
import { BsFacebook } from 'react-icons/bs';

export const NavBar = () => {
  return (
    <HStack height='50px'>
      <Flex justifySelf={'left'}>
        <Icon as={BsFacebook}></Icon>
        <SearchBar></SearchBar>
      </Flex>

      <Flex>
        <IconWithUnderline></IconWithUnderline>
        <IconWithUnderline></IconWithUnderline>
        <IconWithUnderline></IconWithUnderline>
        <IconWithUnderline></IconWithUnderline>
      </Flex>
      <Flex>
        <Icon as={BsFacebook}></Icon>
        <Icon as={BsFacebook}></Icon>
        <Icon as={BsFacebook}></Icon>
        <Icon as={BsFacebook}></Icon>
      </Flex>
    </HStack>
  );
};
