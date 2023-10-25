import { Tooltip, TooltipProps } from '@chakra-ui/react';

export const TooltipWrapper = ({ children, label }: TooltipProps) =>
  label ? (
    <Tooltip label={label} placement='top'>
      {children}
    </Tooltip>
  ) : (
    children
  );
