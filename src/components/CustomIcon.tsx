import { Flex, FlexProps, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type CustomIconProps = IconProps & {
  icon: IconType;
  flexProps?: FlexProps;
};

export const CustomIcon = ({ icon, flexProps, ...rest }: CustomIconProps) => {
  return (
    <Flex _hover={{ bgColor: 'blue.200', borderRadius: 2 }} {...flexProps}>
      <Icon as={icon} fontSize='4xl' {...rest}></Icon>
    </Flex>
  );
};
