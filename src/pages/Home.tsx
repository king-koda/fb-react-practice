import { HStack, Text } from '@chakra-ui/react';

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  return (
    <>
      <HStack
        height='full'
        flex='auto'
        borderX='black 2px solid'
        marginX={['10%', '10%', '0%']}
      >
        <Text>{title}</Text>
      </HStack>
    </>
  );
};
