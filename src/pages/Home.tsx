import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Stories } from '../components/Stories';

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  return (
    <>
      <VStack
        height='full'
        flex='auto'
        borderX='black 2px solid'
        marginX={['10%', '10%', '0%']}
        width={'full'}
        className='main'
      >
        <Stories />

        {/* <NewPost />
        <Feed /> */}
      </VStack>
    </>
  );
};
