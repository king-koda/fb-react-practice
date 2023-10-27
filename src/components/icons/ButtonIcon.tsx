import { Flex, FlexProps, IconProps, TooltipProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { TooltipWrapper } from '@/components/tooltip/TooltipWrapper';
import { BaseIcon } from '@/components/icons/BaseIcon';

export type ButtonIconProps = Omit<IconProps, 'onClick'> & {
  icon: IconType;
  flexProps?: FlexProps;
  underlineOnSelect?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const ButtonIcon = ({
  icon,
  flexProps = {},
  children,
  underlineOnSelect,
  isSelected,
  onClick,
  tooltipProps,
  ...iconProps
}: ButtonIconProps) => {
  const { _hover, ...safeFlexProps } = flexProps;

  return (
    <TooltipWrapper {...tooltipProps}>
      <Flex
        _hover={
          onClick
            ? {
                bgColor: 'gray.600',
                cursor: 'pointer',
                ..._hover,
              }
            : {}
        }
        pos='relative'
        onClick={onClick}
        borderRadius={5}
        padding='2px'
        {...safeFlexProps}
      >
        <Flex gap='4px !important'>
          <BaseIcon icon={icon} {...iconProps}></BaseIcon>
          {children}
        </Flex>
        {underlineOnSelect && isSelected && (
          <Flex
            height='2px'
            marginTop={'10px'}
            bgColor='blue'
            width={'100%'}
            top='100%'
            pos={'absolute'}
          />
        )}
      </Flex>
    </TooltipWrapper>
  );
};
