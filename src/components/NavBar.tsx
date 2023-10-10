import { HStack } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { LeftNavBar } from './LeftNavBar';
import { MidNavBar } from './MidNavBar';
import { RightNavBar } from './RightNavBar';

export const NavBar = () => {
  const showFullNav = useMediaQuery({ minWidth: 700 });
  return (
    <HStack backgroundColor={'blue.700'}>
      <LeftNavBar />
      {showFullNav && <MidNavBar />}
      <RightNavBar />
    </HStack>
  );
};
