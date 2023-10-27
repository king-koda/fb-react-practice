import { SearchBar } from '@/components/nav/SearchBar';
import { Flex } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { ButtonIcon } from '@/components/icons/ButtonIcon';

export const LeftNavBar = () => {
  return (
    <Flex className='outerNav'>
      <ButtonIcon icon={BsFacebook} onClick={() => {}} />
      <SearchBar />
    </Flex>
  );
};
