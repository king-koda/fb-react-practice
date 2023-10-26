import { SearchBar } from '@/components/nav/SearchBar';
import { Flex } from '@chakra-ui/react';
import { ButtonIcon } from '../icons/ButtonIcon';
import { Facebook } from '../icons/Facebook';

export const LeftNavBar = () => {
  return (
    <Flex className='outerNav'>
      <ButtonIcon Icon={Facebook} onClick={() => {}} />
      <SearchBar />
    </Flex>
  );
};
