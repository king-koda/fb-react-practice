import { Flex, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { ButtonIcon } from '@/components/icons/ButtonIcon';

export const SearchBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Flex className='tertiary' borderRadius={30} padding='2' width='full'>
      <Flex ref={ref}>
        <ButtonIcon icon={BiSearch} fontSize={'xl'} alignSelf='center' />
      </Flex>
      <Input
        placeholder={`Search Fakebook`}
        _placeholder={{
          color: 'gray.400',
          fontSize: 'sm',
          fontFamily: 'monospace',
        }}
        alignSelf='center'
        height='full'
        marginLeft='2'
        color='white'
        fontSize='sm'
        fontFamily={'monospace'}
        border='none'
        variant={'unstyled'}
        onFocus={() => {
          if (ref.current) ref.current.style.display = 'none';
        }}
        onBlur={() => {
          if (ref.current) ref.current.style.display = 'flex';
        }}
      ></Input>
    </Flex>
  );
};
