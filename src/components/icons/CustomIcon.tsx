import { Flex, FlexProps, Icon, IconProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type CustomIconProps = Omit<IconProps, "onClick"> & {
  icon: IconType;
  flexProps?: FlexProps;
  underlineOnSelect?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
};

export const CustomIcon = ({
  icon,
  flexProps = {},
  children,
  underlineOnSelect,
  isSelected,
  onClick,
  ...iconProps
}: CustomIconProps) => {
  const { _hover, ...safeFlexProps } = flexProps;
  return (
    <Flex
      _hover={
        onClick
          ? {
              bgColor: "gray.600",
              cursor: "pointer",
              borderRadius: "90",
              ..._hover,
            }
          : {}
      }
      pos="relative"
      onClick={onClick}
      {...safeFlexProps}
    >
      <Icon as={icon} fontSize="4xl" color="gray.500" {...iconProps}></Icon>
      {children}
      {underlineOnSelect && isSelected && (
        <Flex
          height="2px"
          marginTop={"10px"}
          bgColor="blue"
          width={"100%"}
          top="100%"
          pos={"absolute"}
        />
      )}
    </Flex>
  );
};
