import { PageRoutes } from '@/lib/enums';
import { PageTypes } from '@/lib/types';
import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { TooltipWrapper } from '@/components/tooltip/TooltipWrapper';
import { BaseIcon } from '@/components/icons/BaseIcon';
import { ButtonIconProps } from '@/components/icons/ButtonIcon';

type Props = ButtonIconProps & {
  pageType: PageTypes;
};

export const ButtonIconWithUnderline = ({
  pageType,
  flexProps,
  icon,
  tooltipProps,
  ...rest
}: Props) => {
  const navigate = useNavigate();
  const isSelected = window.location.pathname === PageRoutes[pageType];
  const onClick = () => navigate(PageRoutes[pageType]);
  return (
    <TooltipWrapper {...tooltipProps} placement={'right'}>
      <Flex
        _hover={{
          bgColor: 'gray.600',
          cursor: 'pointer',
          borderRadius: '10',
        }}
        pos='relative'
        onClick={onClick}
        borderRadius={5}
        padding='2px'
        bgColor={undefined}
        w='20%'
        justifyContent='center'
        {...flexProps}
      >
        <Flex gap='4px !important'>
          <BaseIcon
            icon={icon}
            color={isSelected ? 'blue' : 'gray.500'}
            {...rest}
          ></BaseIcon>
        </Flex>
        {isSelected && (
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
