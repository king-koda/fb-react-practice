import { VStack } from '@chakra-ui/react';
import { Stories } from '../components/stories/Stories';
import { NewPost } from '../components/post/NewPost';

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  //TODO: remove after done
  sessionStorage.setItem('userId', '1');
  sessionStorage.setItem('firstName', 'Christian');
  sessionStorage.setItem('lastName', 'Radei');
  return (
    <>
      <VStack
        height='full'
        flex='auto'
        borderX='black 2px solid'
        marginX={['10%', '10%', '0%']}
        width={'full'}
        className='main'
        padding='20px'
      >
        <Stories />

        <NewPost />
        {/* <Feed />  */}
      </VStack>
    </>
  );
};
