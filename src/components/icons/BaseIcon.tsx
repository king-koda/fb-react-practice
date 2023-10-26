import { Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export const BaseIcon = (
  props: Omit<IconProps, 'onClick'> & { icon: IconType }
) => {
  return <Icon as={props.icon} fontSize='4xl' color='gray.500' {...props} />;
};
