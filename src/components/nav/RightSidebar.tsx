import { Contacts } from '@/components/chat/Contacts';
import { ButtonIcon } from '@/components/icons/ButtonIcon';
import { Sidebar } from '@/components/nav/Sidebar';
import { Flex, Text } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { GoKebabHorizontal } from 'react-icons/go';

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Sidebar>
      <Flex flexDir={'column'} width='full'>
        <Flex flexDir={'row'} justifyContent={'space-between'} marginTop='-6px'>
          <Text className={'content-text'}>Contacts</Text>
          <Flex gap='6px !important'>
            <ButtonIcon
              fontSize={'2xl'}
              icon={BiSearch}
              onClick={() => {}}
            ></ButtonIcon>
            <ButtonIcon
              fontSize={'2xl'}
              icon={GoKebabHorizontal}
              onClick={() => {}}
            ></ButtonIcon>
          </Flex>
        </Flex>
        <Contacts />
      </Flex>
    </Sidebar>
  );
};
