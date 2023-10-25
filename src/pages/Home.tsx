import { NewPost } from '@/components/post/NewPost';
import { Post } from '@/components/post/Post';
import { Stories } from '@/components/stories/Stories';
import { VStack } from '@chakra-ui/react';

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  //TODO: remove after done
  sessionStorage.setItem('userId', '1');
  sessionStorage.setItem('firstName', 'Christian');
  sessionStorage.setItem('lastName', 'Radei');

  const posts: any[] = [1, 2, 3, 4, 5, 6];
  // posts.length = Math.floor(Math.random() * 50);

  return (
    <VStack
      height='4000px'
      flex='auto'
      width={'full'}
      className='main content'
      gap={'12px !important'}
    >
      <Stories />

      <NewPost />
      {posts.map(() => (
        <Post />
      ))}
    </VStack>
  );
};
