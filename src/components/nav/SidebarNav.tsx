import { Flex, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsFillHouseFill } from 'react-icons/bs';
import { ButtonIcon } from '@/components/icons/ButtonIcon';

export const SidebarNav = () => {
  const items: { name: string; icon: IconType; onClick?: () => void }[] = [
    {
      name: `${sessionStorage.getItem('firstName')}`,
      icon: BsFillHouseFill,
    },
    {
      name: `Friends`,
      icon: BsFillHouseFill,
    },
    {
      name: `Memories`,
      icon: BsFillHouseFill,
    },
    {
      name: `Saved`,
      icon: BsFillHouseFill,
    },
    {
      name: `Groups`,
      icon: BsFillHouseFill,
    },
    {
      name: `Video`,
      icon: BsFillHouseFill,
    },
    {
      name: `Marketplace`,
      icon: BsFillHouseFill,
    },
  ];
  return (
    <Flex direction={'column'} width='full' overflow={'hidden'}>
      {items.map((item, index) => (
        <ButtonIcon
          key={index + 'sidebar-nav-button'}
          icon={item.icon}
          fontSize={'xl'}
          flexProps={{
            paddingX: '3',
            paddingY: '6',
            direction: 'row',
            width: 'full',
            height: '30',
            borderRadius: 10,
            bgColor: 'none',
            alignItems: 'center',
            _hover: { borderRadius: 10 },
          }}
          onClick={() => {}}
          marginTop='2px'
        >
          <Text marginLeft='2' color='white'>
            {item.name}
          </Text>
        </ButtonIcon>
      ))}
    </Flex>
  );
};
