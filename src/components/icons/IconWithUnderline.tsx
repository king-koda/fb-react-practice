import { useNavigate } from "react-router-dom";
import { CustomIcon, CustomIconProps } from "./CustomIcon";
import { PageRoutes } from "../../lib/enums";
import { PageTypes } from "../../lib/types";

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
        borderBottom: isSelected ? "4px solid blue" : undefined,
        bgColor: undefined,
        borderRadius: undefined,
        onClick: () => navigate(PageRoutes[pageType]),
        ...flexProps,
      }}
      color={isSelected ? "blue" : "gray.500"}
    ></CustomIcon>
  );
};
