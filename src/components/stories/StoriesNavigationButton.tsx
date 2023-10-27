import { Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ButtonIcon } from '@/components/icons/ButtonIcon';

type StoryDirection = 'forward' | 'backward';

type Props = {
  icon: IconType;
  type: StoryDirection;
  onClick: (type: StoryDirection) => void;
};

export const StoriesNavigationButton = ({ icon, type, onClick }: Props) => {
  return (
    <Flex
      height={'full'}
      position='absolute'
      alignItems={'center'}
      left={type === 'forward' ? '100%' : undefined}
      flexDirection={type === 'forward' ? 'row-reverse' : undefined}
      marginLeft={type === 'forward' ? '-2px' : '2px'}
    >
      <ButtonIcon
        flexProps={{
          boxSize: 20,
          position: 'absolute',
          alignItems: 'center',
          bgColor: 'black',
          opacity: '70%',
          borderRadius: 90,
          justifyContent: 'center',
        }}
        icon={icon}
        fontSize={'60px'}
        margin={'auto'}
        paddingRight='-2px'
        color='white'
        onClick={() => onClick(type)}
      />
    </Flex>
  );
};
