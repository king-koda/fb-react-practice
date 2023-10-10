import { useNavigate } from 'react-router-dom';
import { CustomIcon, CustomIconProps } from './CustomIcon';
import { PageRoutes, PageTypes } from '../pages/Pages';

type Props = CustomIconProps & {
  pageType: PageTypes;
};

export const IconWithUnderline = ({ pageType, flexProps, ...rest }: Props) => {
  const navigate = useNavigate();
  const isSelected = window.location.pathname === PageRoutes[pageType];
  return (
    <CustomIcon
      {...rest}
      flexProps={{
        borderBottom: isSelected ? '2px solid blue' : undefined,
        ...flexProps,
      }}
      marginX='3'
      onClick={() => navigate(PageRoutes[pageType])}
    ></CustomIcon>
  );
};
