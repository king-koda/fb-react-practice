import { useNavigate } from "react-router-dom";
import { CustomIcon, CustomIconProps } from "./CustomIcon";
import { PageRoutes } from "../../lib/enums";
import { PageTypes } from "../../lib/types";
import { Flex } from "@chakra-ui/react";

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
        bgColor: undefined,
        borderRadius: undefined,
        w: "20%",
        justifyContent: "center",
        ...flexProps,
      }}
      underlineOnSelect
      isSelected={isSelected}
      color={isSelected ? "blue" : "gray.500"}
      onClick={() => navigate(PageRoutes[pageType])}
    />
  );
};
