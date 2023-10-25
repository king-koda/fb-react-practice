import {
  Flex,
  FlexProps,
  Icon,
  IconProps,
  TooltipProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { TooltipWrapper } from '../tooltip/TooltipWrapper';

export type CustomIconProps = Omit<IconProps, 'onClick'> & {
  icon: IconType;
  flexProps?: FlexProps;
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const CustomIcon = ({
  icon,
  flexProps = {},
  children,
  tooltipProps,
  ...iconProps
}: CustomIconProps) => {
  return (
    <TooltipWrapper {...tooltipProps}>
      <Flex pos='relative' borderRadius={5} padding='2px' {...flexProps}>
        <Icon as={icon} fontSize='4xl' color='gray.500' {...iconProps}></Icon>
      </Flex>
    </TooltipWrapper>
  );
};
