import { Flex, FlexProps, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type CustomIconProps = Omit<IconProps, 'onClick'> & {
  icon: IconType;
  flexProps?: FlexProps;
};

export const CustomIcon = ({
  icon,
  flexProps = {},
  children,
  ...iconProps
}: CustomIconProps) => {
  return (
    <Flex pos='relative' borderRadius={5} padding='2px' {...flexProps}>
      <Icon as={icon} fontSize='4xl' color='gray.500' {...iconProps}></Icon>
    </Flex>
  );
};
