import { CustomIcon, CustomIconProps } from './CustomIcon';

export const IconWithUnderline = (props: CustomIconProps) => {
  const { flexProps, ...rest } = props;
  return (
    <CustomIcon
      {...rest}
      flexProps={{ borderBottom: '2px solid blue', ...props.flexProps }}
    ></CustomIcon>
  );
};
