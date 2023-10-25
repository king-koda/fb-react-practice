import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '@/lib/enums';
import { PageTypes } from '@/lib/types';
import { ButtonIcon, ButtonIconProps } from './ButtonIcon';

type Props = ButtonIconProps & {
  pageType: PageTypes;
};

export const IconWithUnderline = ({ pageType, flexProps, ...rest }: Props) => {
  const navigate = useNavigate();
  const isSelected = window.location.pathname === PageRoutes[pageType];
  return (
    <ButtonIcon
      flexProps={{
        bgColor: undefined,
        w: '20%',
        justifyContent: 'center',
        _hover: {
          bgColor: 'gray.600',
          cursor: 'pointer',
          borderRadius: '10',
        },
        ...flexProps,
      }}
      underlineOnSelect
      isSelected={isSelected}
      color={isSelected ? 'blue' : 'gray.500'}
      onClick={() => navigate(PageRoutes[pageType])}
      {...rest}
    />
  );
};
