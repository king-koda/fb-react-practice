import { ProfileIcon } from '@/components/profile/ProfileIcon';
import { Flex, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsFillHouseFill } from 'react-icons/bs';
import { users } from '../../../test-data/stories';

export const Contacts = () => {
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
    <Flex
      direction={'column'}
      gap={'12px !important'}
      width='full'
      overflow={'hidden'}
    >
      {users.map((item, index) => (
        <Contact name={item} />
      ))}
    </Flex>
  );
};

export const Contact = ({ name }) => {
  return (
    <Flex
      _hover={{
        bgColor: 'gray.600',
        cursor: 'pointer',
      }}
      pos='relative'
      onClick={() => {}}
      borderRadius={5}
      padding='2px'
      alignItems='center'
    >
      <ProfileIcon
        profileIcon={'src/assets/badger.png'}
        profileId={Number(sessionStorage.getItem('userId'))}
        key={`${sessionStorage.getItem('userId')}-story-profile-icon`}
        pos={undefined}
        marginTop={undefined}
        marginLeft={undefined}
        border='none'
        boxSize={12}
        placeSelf={'center'}
      />
      <Text marginLeft='2' color='white'>
        {name}
      </Text>
    </Flex>
  );
};
