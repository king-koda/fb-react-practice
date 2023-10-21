import { Flex } from '@chakra-ui/react';
import { Story as StoryType } from '../lib/types';

type Props = {
  story: StoryType;
};
export const Story = (props: Props) => {
  const { story } = props;
  return (
    <Flex
      //   aspectRatio={'9/16'}
      border='2px blue solid'
      borderRadius={'10'}
      minWidth='200px'
      //   height='100%'
      margin='3'
      justifySelf={'flex-end'}
    ></Flex>
  );
};
