import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconProps,
  VStack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type CustomIconProps = {
  icon: IconType;
  flexProps?: FlexProps;
  iconProps?: IconProps;
};

export const CustomIcon = ({ icon, flexProps, iconProps }: CustomIconProps) => {
  return (
    <Flex {...flexProps}>
      <Icon as={icon} {...iconProps}></Icon>
    </Flex>
  );
};
