import { Flex, FlexProps, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type CustomIconProps = IconProps & {
  icon: IconType;
  flexProps?: FlexProps;
};

export const CustomIcon = ({ icon, flexProps, ...rest }: CustomIconProps) => {
  return (
    <Flex
      _hover={{ bgColor: 'gray.600', borderRadius: 90, cursor: 'pointer' }}
      borderRadius={'90'}
      {...flexProps}
    >
      <Icon as={icon} fontSize='4xl' color='gray.500' {...rest}></Icon>
    </Flex>
  );
};
