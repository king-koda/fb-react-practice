import { Tooltip, TooltipProps } from '@chakra-ui/react';

export const TooltipWrapper = ({ children, ...rest }: TooltipProps) =>
  rest?.label ? (
    <Tooltip placement='top' openDelay={150} {...rest}>
      {children}
    </Tooltip>
  ) : (
    children
  );
