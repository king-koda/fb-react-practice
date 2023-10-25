import { Flex } from '@chakra-ui/react';
import { ButtonIcon, ButtonIconProps } from '../icons/ButtonIcon';

export const NewPostButton = (props: ButtonIconProps) => {
  return (
    <Flex width='33.33%' justifyContent={'center'}>
      <ButtonIcon flexProps={{ alignSelf: 'center', padding: 2 }} {...props} />
    </Flex>
  );
};
