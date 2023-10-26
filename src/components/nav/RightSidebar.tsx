import { Sidebar } from '@/components/nav/Sidebar';
import { SidebarNav } from '@/components/nav/SidebarNav';
import { Flex, Text } from '@chakra-ui/react';
import { ButtonIcon } from '../icons/ButtonIcon';
import { Kebab } from '../icons/Kebab';
import { Search } from '../icons/Search';

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Sidebar>
      <Flex flexDir={'column'} width='full'>
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text className={'content-text'}>Contacts</Text>
          <Flex>
            <ButtonIcon
              fontSize={'2xl'}
              Icon={Search}
              onClick={() => {}}
            ></ButtonIcon>
            <ButtonIcon
              fontSize={'2xl'}
              Icon={Kebab}
              onClick={() => {}}
            ></ButtonIcon>
          </Flex>
        </Flex>
        <SidebarNav />
      </Flex>
    </Sidebar>
  );
};
